import React, { Component } from 'react'
import dataKinh from './Data/dataGlasses.json'
export default class BaiTapThuKinh extends Component {

    // Tạo state để đổi kính:
    state = {
        pngKinh: require('./AssetBaiTapThuKinh/v1.png')
    }

    renderKinh = (pngKinhMoi) => {
        let newState = {
            pngKinh: pngKinhMoi,
        }
        this.setState(newState)
    }

    renderDanhSachKinh = () => {
        return dataKinh.map((kinh, index) => {
            
            return <div className='col-2 py-3' style={{border: '0.5px solid pink', cursor:'pointer'}} data-id='kinh.id' onClick={()=>{this.renderKinh(kinh.url)}}>
            <img src={kinh.url} alt='kính 1' style={{width: '60%'}}/>
        </div>
        })
    }

  render() {
    return (
        // Bước 1: Xây dựng giao diện
      <div>
        <img src={require('./AssetBaiTapThuKinh/background.jpg')} alt="background" style={{
            width: '100%',
            position:'relative',
            height: '700px',
            }}/>
        <div style={{position:'absolute',backgroundColor:'rgba(0,0,0,0.3)', top:'0',left:'0', height:'700px', width:'100%'}}></div>
        <div style={{
            position:'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '50px',
            backgroundColor: '#000',
            opacity:'0.5',
            lineHeight: '50px',
            fontSize:'20px',
            display: 'table-cell',
            color: 'white',
            }}>
                TRY GLASSES APP ONLINE
        </div>
        <div>
            <img src={require('./AssetBaiTapThuKinh/model.jpg')} alt='ảnh mẫu' style={{
                position:'absolute',top:'70px', width: '200px', left:'170px',
                }}/>
            <img src={this.state.pngKinh} alt='ảnh kính đeo' style={{
                position:'absolute',
                top: '133px',
                left: '210px',
                width: '120px',
            }}/>
            <img src={require('./AssetBaiTapThuKinh/model.jpg')} alt='ảnh mẫu' style={{position:'absolute',top:'70px', width: '200px', right: '170px'}}/>
            <div className='row' style={{
                position:'absolute', 
                top: '430px', 
                left:'100px', 
                right:'100px',
                backgroundColor:'#fff',
                }}>
                {/* <div className='col-2'>
                    <img src={require('./AssetBaiTapThuKinh/g1.jpg')} alt='kính 1' style={{width: '60%', cursor:'pointer'}}/>
                </div>
                <div className='col-2'>
                    <img src={require('./AssetBaiTapThuKinh/g1.jpg')} alt='kính 1' style={{width: '60%', cursor:'pointer'}}/>
                </div>
                <div className='col-2'>
                    <img src={require('./AssetBaiTapThuKinh/g1.jpg')} alt='kính 1' style={{width: '60%', cursor:'pointer'}}/>
                </div>
                <div className='col-2'>
                    <img src={require('./AssetBaiTapThuKinh/g1.jpg')} alt='kính 1' style={{width: '60%', cursor:'pointer'}}/>
                </div>
                <div className='col-2'>
                    <img src={require('./AssetBaiTapThuKinh/g1.jpg')} alt='kính 1' style={{width: '60%', cursor:'pointer'}}/>
                </div>
                <div className='col-2'>
                    <img src={require('./AssetBaiTapThuKinh/g1.jpg')} alt='kính 1' style={{width: '60%', cursor:'pointer'}}/>
                </div>
                <div className='col-2'>
                    <img src={require('./AssetBaiTapThuKinh/g1.jpg')} alt='kính 1' style={{width: '60%', cursor:'pointer'}}/>
                </div>
                <div className='col-2'>
                    <img src={require('./AssetBaiTapThuKinh/g1.jpg')} alt='kính 1' style={{width: '60%', cursor:'pointer'}}/>
                </div>
                <div className='col-2'>
                    <img src={require('./AssetBaiTapThuKinh/g1.jpg')} alt='kính 1' style={{width: '60%', cursor:'pointer'}}/>
                </div> */}
                {this.renderDanhSachKinh()}
            </div>
        </div>
      </div>
    )
  }
}
