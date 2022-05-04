import React, { useState, useEffect } from 'react'
import { ApiHelper } from '../Utils/ApiHelper';
import { Charactersprops } from '../Hook/Charactersprops';
import { Paginator } from 'primereact/paginator';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { ProgressSpinner } from 'primereact/progressspinner';

const Dashboard = () => {
    const [loader, setLoader] = useState();
    const [data, setData] = useState([]);
    const [paginator_data, paginatorsetData] = useState({});
    const [basicFirst, setBasicFirst] = useState(0);
    const [basicRows, setBasicRows] = useState(10);
    var arr=[]
    //calls when the components loads
    useEffect(() => {
        setLoader(true)
        let url = "character";
        ApiHelper(url, 'GET')
            .then(resposnse => {
                setLoader(false)
                setData(resposnse.results);
                paginatorsetData(resposnse.info)
            })
    }, []);

    // pagination hits
    const onBasicPageChange = (event) => {
        window.scrollTo(0, 0);
        setBasicFirst(event.first);
        setBasicRows(event.rows);
        let url = "character?page=" + (1 + (event.first) / event.rows);
        ApiHelper(url, 'GET')
            .then(resposnse => {

                setData(resposnse.results);
                paginatorsetData(resposnse.info)
            })
    }
    return (<>
    <h1 data-testid= 'basicFirst' style={{textAlign: 'center'}}>RickandMorty</h1>
        <div className="showcase__Wrapper-sc-1x4wk68-0 kZQvlq">
            
            {loader ? <ProgressSpinner style={{ width: '100px', height: '100px' }} /> :
                <div style={{ display: 'contents' }}> 
                    {data.map((row, key) => (
                        <Charactersprops key ={row.id} name={row.name} image={row.image} url={row.url} species={row.species} status={row.status} location={row.location.name} origin={row.origin.name} gender={row.gender} arr={arr}></Charactersprops>

                    ))}
                </div>
            }       {loader ? '' :
                <div>
                    <Paginator first={basicFirst} rows={basicRows} totalRecords={paginator_data.pages * 10} onPageChange={onBasicPageChange}></Paginator>
                </div>
            }
        </div>
    </>
    )
}
export default Dashboard;