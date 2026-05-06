"use client"
import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import Link from "next/link";

const BreadCumb = ({Title}) => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
      <div className="breadcumb-area about" data-background="/assets/images/inner/breadcumb-bg.png">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <h1>{Title}</h1>
                <ul className="breadcumb-list">
                  <li><Link href="/">Home</Link></li>
                  <li className="list-arrow">&lt;</li>
                  <li>{Title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BreadCumb;