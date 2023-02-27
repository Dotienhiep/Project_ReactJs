import React, { useState } from "react";
import { HeaderWrapper } from "./style";
import Input from "./../Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReceipt,
  faFileInvoice,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  const [formData, setFormData] = useState({
    nameproduct: "",
  });
  const [key, setKey] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setKey(value);
    setFormData({
      ...formData,
      [name]: value,
    });
    // setInputValue(value);
  };
  return (
    <HeaderWrapper>
      <div className="header-left">
        <Link to="/">
        <span className="logo">
          <img src="/assets/images/logoshoplaptop.png" alt="logo" />
        </span>
        <div className="logoo">
          <span className="shop">Shop</span>
          <span className="com">.Com.vn</span>
        </div>
        </Link>
        <div className="input-header">
          <Input
            className="input-search"
            label=""
            placeholder="Nhập tên laptop, điện thoại,... cần tìm"
            autoFocus={true}
            type="text"
            name="nameproduct"
            value={formData.nameproduct}
            onChange={handleChange}
          />
        </div>
        <Link to={`/search/${key}`}>
        <button className="btn-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        </Link>
      </div>
      <div className="header-right">
        <ul className="">
          <li>
            <FontAwesomeIcon icon={faReceipt} />
            Thông tin
          </li>
          <li>
            <Link to="/pay">
            <FontAwesomeIcon icon={faFileInvoice} />
            Thanh toán & tiện ích
            </Link>
          </li>
          <li>
            <Link className="cart-icon" to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            Giỏ hàng
            </Link>
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  );
};
export default Header;
