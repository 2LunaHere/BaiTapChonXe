import React, { Component } from 'react'
import './DataBaiTapChonXe/BaiTapChonXe.css'
import data from './DataBaiTapChonXe/arrayFeatures.json'
import dataWheel from './DataBaiTapChonXe/wheels.json'
export default class BaiTapChonXe extends Component {

    renderIcon = () => {
        return data.map((item, index) => {
            return <div className='row mt-1 border border-color-default m-3' style={{ cursor: 'pointer' }}>
                <div className='col-2 '>
                    <img className='p-1' src={item.img} alt={index} style={{ width: '100%' }} />
                </div>
                <div className='col-10'>
                    <h5 className='p-3'>{item.title}</h5>
                    <p className='pl-3 mt-0'>{item.type}</p>
                </div>
            </div>
        })
    }

    renderWheel = () => {
        return dataWheel.map((item, index) => {
            return <div className='row mt-1 border border-color-default m-3' style={{ cursor: 'pointer' }}>
                <div className='col-2'>
                    <img className='p-1' src={item.img} alt={index} style={{ width: '100%' }} />
                </div>
                <div className='col-10 d-flex flex-column align-item-center justify-content-center'>
                    <p className='pl-3 mt-0'>{item.title}</p>
                </div>
            </div>
        })
    }

    componentDidMount = () => {

        // Đây là phương thức có sẵn của componnent tự động thực thi sau khi render được gọi, lưu ý:
        // componentdidmount chỉ chạy 1 lần sau khi render thực thi

        let tagScript = document.createElement('script');
        tagScript.src = "https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy";

        document.querySelector('.appendScript').appendChild(tagScript);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='model' style={{ width: '100%' }}>
                            <div
                                class="cloudimage-360"
                                data-folder="./images/images-red/images-red-1"
                                data-filename-x="civic-{index}.jpg"
                                data-amount-x="8"
                            ></div>
                        </div>
                        <div className='appendScript'>
                        </div>
                        <div className="card mt-2">
                            <h5 className='card-header text-default'>Exterior Color</h5>
                            <table className='table border boder-color-light'>
                                <thead>
                                    <tr>
                                        <th>Color</th>
                                        <th>Black</th>
                                    </tr>
                                    <tr>
                                        <th>Price</th>
                                        <th>$19.000,00</th>
                                    </tr>
                                    <tr>
                                        <th>Engine Type</th>
                                        <th>Inline 3 cylinder</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="card text-left">
                            <h5 className='card-header text-default'>Exterior Color</h5>
                            <div className='container-fluid'>
                                {this.renderIcon()}
                            </div>
                        </div>
                        <div className="card text-left mt-3">
                            <h5 className='card-header text-default'>Wheel Color</h5>
                            <div className='container-fluid'>
                                {this.renderWheel()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
