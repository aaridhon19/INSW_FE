import './Tab.css'
import FormEntitas from '../Form/FormEntitas';
import FormPungutan from '../Form/FormPungutan';
import FormUtama from '../Form/FormUtama';
import React, { useState } from 'react';
import { TabNavigation } from './TabNavigation';

export default function Tab({ data1, data2, data3, onNoPengajuanChange, onRefresh }) {
    const [activeTab, setActiveTab] = useState('data_utama');

    const tabs = [
        {
            id: 'data_utama',
            label: 'Data Utama',
            content: (
                <div className="Tab-content-utama">
                    <FormUtama dataUtama={data1} onNoPengajuanChangeForm={onNoPengajuanChange} />
                    <TabNavigation
                        onPrevious={null}
                        onNext={() => setActiveTab('data_entitas')}
                    />
                </div>
            )
        },
        { 
            id: 'data_entitas', 
            label: 'Data Entitas',
            content: (
                <div className="Tab-content">
                    <FormEntitas dataEntitas={data2} />
                    <TabNavigation
                        onPrevious={() => setActiveTab('data_utama')}
                        onNext={() => setActiveTab('data_pungutan')}
                    />
                </div>
            )
        },
        { 
            id: 'data_pungutan', 
            label: 'Data Pungutan',
            content : (
                <div className="Tab-content">
                    <FormPungutan dataPungutan={data3} onRefresh={onRefresh}/>
                    <TabNavigation
                        onPrevious={() => setActiveTab('data_entitas')}
                        onNext={null}
                    />
                </div>
            )
        },
    ];

    return (
        <div className="Tab">
            <div className="Tab-header">
                {tabs.map((tab) => (
                    <button key={tab.id} className={activeTab === tab.id ? 'active' : ""} onClick={() => setActiveTab(tab.id)}>
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
        </div>
    );
}
