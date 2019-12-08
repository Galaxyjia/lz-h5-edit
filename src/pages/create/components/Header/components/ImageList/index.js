import React from 'react';
import { Row, Col } from 'antd';
import { getPictureList } from '../../../../../../services/create';
import LazyImage from './lazyImage';

const defaultList = [
  'http://www.lzuntalented.cn/img/double11/5d9c01049298a.png',
  'http://www.lzuntalented.cn/img/1.jpg',
  'http://www.lzuntalented.cn/img/double11/5daff75820748.png',
  'http://www.lzuntalented.cn/img/double11/5daff75820c8c.gif',
  'http://www.lzuntalented.cn/img/double11/5daff75820657.png',
  'http://www.lzuntalented.cn/img/double11/5daff758207ee.gif',
  'http://www.lzuntalented.cn/img/double11/5daff75845ebc.png',
  'http://chuantu.xyz/t6/703/1575802380x2890191687.jpg',
  'http://chuantu.xyz/t6/703/1575802448x3703728804.jpg',
];

export default class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [...defaultList],
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    getPictureList().then((res) => {
      this.setState({ list: [...defaultList].concat(res) });
    });
  }


  render() {
    const { onAddPciture } = this.props;
    const { list } = this.state;
    return (
      <Row type="flex" className="image-list" justify="space-around">
        {
            list.map(it => (
              <Col key={it} className="item" onClick={onAddPciture(it)}>
                <LazyImage width="95%" src={it} alt="" />
              </Col>
            ))
        }
        <i className="i" />
        <i className="i" />
        <i className="i" />
        <i className="i" />
      </Row>
    );
  }
}
