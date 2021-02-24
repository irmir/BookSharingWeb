import React from 'react'

import { MenuAdmin } from './MenuAdmin'
import { ContentAdmin } from './ContentAdmin'

import {ProfileAvatar} from '../../common/ProfileAvatar'

export const AdminPanel = () => {

    return (
        <>
            <div className="header">
                <ProfileAvatar />
            </div>
            <div className="admin-panel">
                <MenuAdmin />
                <ContentAdmin />
            </div>
        </>
    )
}