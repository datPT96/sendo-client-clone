import React, { ReactNode, createContext, useState } from 'react'

interface ActionContextProp {
    children: ReactNode
}

export interface Action {
    id: number
    location: string[]
    shipMethods: string[]
    shopTypes: string[]
    promo: string[]
    other: string[]
}

interface ActionContextDefault {
    actions: Action
    addAction: (type: string, checkedItem: string[]) => void
}

const actionContextDefault = {
    actions: {
        id: 0,
        location: [],
        shipMethods: [],
        shopTypes: [],
        promo: [],
        other: [],
    },
    addAction: () => {},
}

const ActionContext = createContext<ActionContextDefault>(actionContextDefault)

const ActionContextProvider = ({ children }: ActionContextProp) => {
    const [actions, setAction] = useState<Action>(actionContextDefault.actions)

    const addAction = (type: string, checkedItem: string[]) => {
        switch (type) {
            case 'location':
                setAction({ ...actions, location: checkedItem })
                break
            case 'shopTypes':
                setAction({ ...actions, shopTypes: checkedItem })
                break
            case 'shipMethods':
                setAction({ ...actions, shipMethods: checkedItem })
                break
            case 'promo':
                setAction({ ...actions, promo: checkedItem })
                break
            case 'other':
                setAction({ ...actions, other: checkedItem })
                break
            default:
                break
        }
    }

    const actionContextValue = {
        actions,
        addAction,
    }

    return (
        <ActionContext.Provider value={actionContextValue}>
            {children}
        </ActionContext.Provider>
    )
}

export { ActionContext }
export default ActionContextProvider
