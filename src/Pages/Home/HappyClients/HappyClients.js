import React from 'react';
import client1 from '../../../Images/HappyClients/client1.jpg'
import client2 from '../../../Images/HappyClients/client2.jpg'
import client3 from '../../../Images/HappyClients/client3.jpg'
import HappyClient from '../HappyClient/HappyClient';

const clients = [
    { id: 1, name: 'maria khan', img: client1 ,
        description: 'He is Super mentor and counsellor i was there for my nutrition plan and he gave me the best plan for my body and it worked i wished him best of luck for future.'
    },
    { id: 2, name: 'aria khan', img: client2 ,
        description:'I was there for make a plan for make my day effective, he talked to me nicely and very friendly then advice me and gave me the best plan'
    },
    { id: 3, name: 'johnson yushuf ', img: client3 ,
        description: 'i was fat and i need a personal trainer in my home because i was shy to go gym. one of my cousin told about him and i talked to him then i take full month package it was great.'
    },
]

const HappyClients = () => {
    return (
        <div id='clients' className='container text-center mb-5'>
            <h2 className='section-title p-2 '>Happy Clients</h2>
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