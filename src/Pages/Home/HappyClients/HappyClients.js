import React from 'react';
import client1 from '../../../Images/HappyClients/client1.jpg'
import client2 from '../../../Images/HappyClients/client2.jpg'
import client3 from '../../../Images/HappyClients/client3.jpg'
import HappyClient from '../HappyClient/HappyClient';

const clients = [
    { id: 1, name: 'maria khan', img: client1},
    { id: 2, name: 'aria khan', img: client2},
    { id: 3, name: 'johnson yushuf ', img: client3 },
]

const HappyClients = () => {
    return (
        <div id='clients' className='container text-center mb-5'>
            <h2>Happy Clients</h2>
            <div className='row'>
                {
                    clients.map(client => <HappyClient
                        key={client.id}
                        client={client}
                    ></HappyClient>)
                }
            </div>

        </div>
    );
};

export default HappyClients;