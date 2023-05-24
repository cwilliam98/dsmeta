import { useEffect, useState } from 'react';
import NotificationButton from '../NotificationButton';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../../utils/request';
import { Sale } from '../../models/sale';
import Pagination from '../Pagination';
import { SpringPage } from '../../models/vendor/spring';

function SalesCard() {

    const [page, setPage] = useState<SpringPage<Sale>>();

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const getSales = (pageNumber: number) => {
        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);

        const params: AxiosRequestConfig = {
            method: 'GET',
            baseURL: BASE_URL,
            url: '/sales',
            params: {
                page: pageNumber,
                size: 12,
                minDate: dmin,
                maxDate: dmax
            }
        };
        axios(params).then(response => {
            setPage(response.data);
        })
    }

    useEffect(() => {
       getSales(0);
    }, [minDate, maxDate]);

    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => { setMinDate(date) }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => { setMaxDate(date) }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                page?.content.map(sale => {
                                    return (
                                        <tr key={sale.id}>
                                            <td className="show992">{sale.id}</td>
                                            <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                            <td>{sale.sellerName}</td>
                                            <td className="show992">{sale.visited}</td>
                                            <td className="show992">{sale.visited}</td>
                                            <td>R$ {sale.amount.toFixed(2)}</td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <NotificationButton saleId={sale.id} />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
                <div>
                    <Pagination pageCount={page ? page.totalPages : 0} range={3} onChange={getSales} />
                </div>
            </div>
        </>
    )
}

export default SalesCard;