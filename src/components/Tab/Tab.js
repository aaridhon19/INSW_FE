import './Tab.css'
import FormEntitas from '../Form/FormEntitas';
import FormPungutan from '../Form/FormPungutan';
import FormUtama from '../Form/FormUtama';
import React, { useState } from 'react';

export default function Tab(props) {
    const { data1, data2, data3 } = props;
    const [activeTab, setActiveTab] = useState('data_utama');
    // console.log(dataUtama.dataUtama);
    // console.log(dataEntitas);


    const renderContent = () => {
        switch (activeTab) {
            case 'data_utama':
                return (
                    <div className="Tab-content-utama">
                        <FormUtama dataUtama={data1} />
                        <div className="Tab-buttons">
                            <button className="Tab-btn" disabled>Sebelumnya</button>
                            <button className="Tab-btn" onClick={() => setActiveTab('data_entitas')}>Selanjutnya</button>
                        </div>
                    </div>
                );
            case 'data_entitas':
                return (
                    <div className="Tab-content">
                        <FormEntitas dataEntitas={data2} />
                        <div className="Tab-buttons">
                            <button className="Tab-btn" onClick={() => setActiveTab('data_utama')}>Sebelumnya</button>
                            <button className="Tab-btn" onClick={() => setActiveTab('data_pungutan')}>Selanjutnya</button>
                        </div>
                    </div>
                );
            case 'data_pungutan':
                return (
                    <div className="Tab-content">
                        <FormPungutan dataPungutan={data3} />
                        <div className="Tab-buttons">
                            <button className="Tab-btn" onClick={() => setActiveTab('data_entitas')}>Sebelumnya</button>
                            <button className="Tab-btn" disabled>Selanjutnya</button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="Tab">
            <div className="Tab-header">
                <button
                    className={activeTab === 'data_utama' ? 'active' : ''}
                    onClick={() => setActiveTab('data_utama')}
                >
                    Data Utama
                </button>
                <button
                    className={activeTab === 'data_entitas' ? 'active' : ''}
                    onClick={() => setActiveTab('data_entitas')}
                >
                    Data Entitas
                </button>
                <button
                    className={activeTab === 'data_pungutan' ? 'active' : ''}
                    onClick={() => setActiveTab('data_pungutan')}
                >
                    Data Pungutan
                </button>
            </div>
            <div>{renderContent()}</div>
        </div>
    );
}
