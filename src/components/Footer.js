import React from 'react'
import '../css/footer.css'
import { Facebook, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-footer text-white py-16 container-fluid">
            <div className="row">
                {/* Logo and Description Section */}
                <div className="mb-12 col-3 text-start">
                    <div className="flex items-center mb-4">
                        <img src="./Logo-footer.svg" alt="Rentify Logo" className="mr-2"/>
                    </div>
                    <p className="text-gray-400 max-w-md">
                        Rentify là một trong những thương hiệu hàng đầu trong lĩnh vực tư vấn cho thuê văn phòng tại
                        Thành phố Hồ Chí Minh.
                    </p>
                </div>

                <div className="col-3 text-start">
                    {/* Customer Service Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">CHĂM SÓC KHÁCH HÀNG</h3>
                        <div className="text-gray-400">
                            <p className="mb-2">Văn phòng tại TP.HCM:</p>
                            <p className="mb-4">Tầng 11 - Tòa nhà UOA, số 96 Phạm Hùng, Phường 4, Quận 8, TP.HCM.</p>
                            <p className="mb-2">Email:</p>
                            <p className="mb-4">info@rentify.vn</p>
                            <p className="mb-2">Đường dây nóng:</p>
                            <p>0123 456 789</p>
                        </div>
                    </div>

                </div>
                <div className="col-3 text-start">
                    {/* Office Section */}
                    <h3 className="text-lg font-semibold mb-4">VĂN PHÒNG</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li>Về chúng tôi</li>
                        <li>Văn phòng cho thuê tại TP.HCM</li>
                        <li>Văn phòng cho thuê có dịch vụ</li>
                        <li>Thiết kế & Xây dựng văn phòng</li>
                    </ul>
                </div>
                <div className="col-3 text-start">
                    {/* Tools Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">CÔNG CỤ</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li>Chuyển đổi tiền tệ USD - VND</li>
                            <li>Tính toán diện tích thuê</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row pb-4 pt-2">
                {/* Footer Bottom */}
                <div className="text-gray-400 text-sm col text-start">
                    Bản quyền © 2024 thuộc về Rentify.
                </div>
                <div className="col text-end">
                    <Mail className="icon text-gray-400 hover:text-white cursor-pointer"/>
                    <Facebook className="icon text-gray-400 hover:text-white cursor-pointer"/>
                    <Twitter className="icon text-gray-400 hover:text-white cursor-pointer"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer
