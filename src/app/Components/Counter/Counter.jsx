"use client"
import { useEffect } from 'react';
import data from '../../Data/counter.json';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const Counter = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);
    
    return (
            <div className="counter-area">
                <div className="container">
                    <div className="row counter-item" data-background="/assets/images/home-3/counter-bg.png">
                    {data.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-single-box">
                                <div className="counter-content">
                                    <span className="counter">{item.title}</span>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="counter-thumb">
                        <Image src="/assets/images/home-3/counter-thu.png" alt="Counter statistics illustration" width={285} height={187}   />
                    </div>
                </div>
            </div>
    );
};

export default Counter;