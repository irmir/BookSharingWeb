import React from 'react'

import { AuthCard } from '../../cards/AuthCard'
import { AdminPanel } from  '../admin-page/AdminPanel'

export const AdminPage = ({isAdmin = true}) => {
debugger
    return (
        <div className="admin">
            {isAdmin ? <AdminPanel />: 
                        <AuthCard />}
        </div>
    )
}