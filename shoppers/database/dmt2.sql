-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2019 at 01:45 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dmt`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill_detail`
--

CREATE TABLE `bill_detail` (
  `bill_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bill_list`
--

CREATE TABLE `bill_list` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `add_day` date NOT NULL,
  `delivery_day` date NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `name`, `description`) VALUES
(1, 'YAME', 'abcdef'),
(2, 'skiny', 'Hãng thời trang dành cho giới trẻ'),
(3, 'bebe store', ''),
(4, 'Adidas', 'Hãng giày hàng đầu thế giới'),
(5, 'No style', ''),
(6, 'KiriMaru', '');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Áo khoác'),
(2, 'Áo sơ-mi'),
(3, 'Quần Jean'),
(4, 'Giày'),
(5, 'Quần tây'),
(6, 'Áo thun');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `img` text COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `price` float NOT NULL,
  `total_like` int(11) NOT NULL,
  `total_bought` int(11) NOT NULL,
  `in_storage` int(11) NOT NULL,
  `rating_avg` float NOT NULL,
  `rating_5` int(11) NOT NULL,
  `rating_4` int(11) NOT NULL,
  `rating_3` int(11) NOT NULL,
  `rating_2` int(11) NOT NULL,
  `rating_1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='thông tin sản phẩm';

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `cat_id`, `brand_id`, `name`, `img`, `description`, `price`, `total_like`, `total_bought`, `in_storage`, `rating_avg`, `rating_5`, `rating_4`, `rating_3`, `rating_2`, `rating_1`) VALUES
(4, 3, 2, 'Quần Jean Skinny xanh', 'quan-jeans-skinny-bac-qj1524_2_small-9034-t.jpg', 'Màu bạc tươi sáng, mới lạ tạo nên phần bắt mắt, cá tính riêng biệt cho Quần Jean Skinny Bạc. Không quá cầu kỳ với những đường rách, xước táo bạo như những item khác. Mặt trước của sản phẩm được thiết kế trơn suông với các đường may tinh tế, gãy gọn, phối những đường chỉ đỏ tạo điểm nhấn ở túi cho sản phẩm.', 395000, 4, 10, 5, 0, 1, 2, 1, 1, 0),
(5, 3, 2, 'Quần Jean Skinny xanh biển', 'quan-jeans-skinny-xanh-bien-qj1542_2_small-10303-t.jpg', 'Quần Jean skinny xanh biển với đường nét tổng thể hài hòa, tinh tế, phối những đường xước nhẹ nhàng ở mặt trước. Chất liệu jean bền đẹp, dày dặn, nhưng co giản nên rất thoải mái, ứng dụng cao trong nhiều hoàn cảnh. Kiểu dáng trẻ trung, bạn có thể xắn gấu quần lên cao cho thêm phần bụi bặm.', 375000, 20, 10, 5, 4, 6, 2, 5, 0, 0),
(6, 3, 2, 'Quần Jean Skinny bạc', 'quan-jeans-skinny-bac-qj1616_2_small-10298-t.jpg', 'Quần Jean skinny bạc chất liệu jean bền đẹp, không quá dày, giúp bạn thoải mái trong từng hoạt động. Phối logo thương hiệu 4MEN ở phí sau, hai túi sau phối viền sọc đỏ ngang túi. Màu xanh đen cùng vết xước thời trang.', 395000, 15, 12, 9, 3, 1, 2, 4, 2, 1),
(7, 3, 2, 'Quần Jean Skinny đen', 'quan-jeans-skinny-den-qj1526_2_small-9036-t.jpg', 'Quần Jean skinny đen với đường nét tổng thể hài hòa, tinh tế, phối những đường xước nhẹ nhàng ở mặt trước. Chất liệu jean bền đẹp, dày dặn, nhưng co giản nên rất thoải mái, ứng dụng cao trong nhiều hoàn cảnh. Kiểu dáng trẻ trung, bạn có thể xắn gấu quần lên cao cho thêm phần bụi bặm', 325000, 9, 10, 4, 0, 1, 2, 4, 1, 0),
(8, 3, 2, 'Quần Jean Skinny xanh đen', 'quan-jeans-skinny-xanh-den-qj1537_2_small-9367-t.jpg', 'Quần Jean Skinny Xanh Đen thiết kế trẻ trung, hiện đại. Form quần skinny ôm vừa giúp bạn nam ôm dáng. Chất liệu jean cao cấp, co giãn, đảm bảo chắc chắn, bền đẹp. Quần được thiết kế hai túi trước và hai túi sau tiện lợi.', 350000, 13, 10, 15, 4, 4, 4, 4, 0, 0),
(9, 1, 1, 'Áo Khoác Nam Ma Bư Dù', '9a25ad27-759a-8400-9bf7-00151912a065.jpg', 'Phong cách trẻ trung', 425000, 16, 15, 20, 3.8, 1, 2, 4, 1, 1),
(10, 1, 1, 'Áo Khoác Nam Ma Bư Dù Xám', '6fb0e87a-64be-4500-90e1-00151b7c07b1.jpg', 'Phong cách mới mẻ', 325000, 10, 12, 15, 3.8, 1, 2, 4, 1, 1),
(11, 1, 1, 'Áo Khoác Nam Ma Bư Thun', '294f5ea6-9238-2900-923b-00152cc0e503.jpg', 'Phong cách mới mẻ', 285000, 10, 12, 20, 4.5, 6, 4, 2, 0, 0),
(12, 1, 1, 'Áo Khoác Nam No Style', '993ff87a-bec2-4b00-fc43-0014f8e34413.jpg', 'Phong cách hiện đại', 285000, 10, 12, 20, 4, 4, 4, 1, 0, 0),
(13, 1, 1, 'Áo Khoác Nam Ma Bư Thun xám trắng', '9ba3508e-ac32-4c00-ae69-0014976fb849.jpg', 'Phong cách mới mẻ', 255000, 10, 12, 20, 4, 4, 4, 1, 0, 0),
(14, 2, 3, 'Áo sơ mi nam Vải Kẻ chất Đũi', '8fea39782d035bb023c836b8050d8e12.jpeg', 'Chắc hẳn chàng trai nào cũng có ít nhất cho mình một chiếc áo sơ mi trắng như Áo Sơ Mi Vải kẻ chất đũi. Thiết kế thanh lịch, trang nhã, diện vào chỉ có chuẩn “soái ca”.', 150000, 13, 12, 25, 3.8, 3, 4, 4, 2, 0),
(15, 2, 3, 'Áo sơ mi cổ tàu trắng', 'ao-so-mi-co-tau-trang.jpg', 'Áo sơ mi cổ tàu trắng với kiểu dáng thanh lịch, màu sắc trang nhã, form ôm body theo phong cách thời trang Hàn Quốc.', 175000, 14, 22, 30, 4, 7, 10, 3, 2, 0),
(16, 2, 3, 'Áo sơ mi cổ trụ', 'ao-so-mi-nam-co-tru.jpg', 'Chất liệu vải Âu cao cấp nhập từ Hàn Quốc. Kiểu dáng 4 nút thanh lịch, hiện đại. Form slimfit Hàn Quốc tôn dáng, thời thượng. Mang đến sự trẻ trung, hiện đại, phong độ khi phối trọn bộ veston hoặc mặc khoác ngoài sơ mi khi làm việc.', 150000, 15, 25, 30, 4.3, 15, 10, 3, 2, 0),
(17, 2, 3, 'Áo sơ mi nam form rong', 'ao-so-mi-nam-form-rong.jpg', 'Áo sơ mi nam form rong phong cách thời trang Hàn Quốc. Form áo body, cổ áo ve nhỏ, áo một nút cá tính, cổ tay áo đính nút đỏ sang trọng. Chất liệu vải âu cao cấp hai lớp, bền đẹp, tạo form dáng chuẩn.', 200000, 18, 20, 35, 3.9, 5, 10, 10, 2, 0),
(18, 2, 3, 'Áo sơ mi nam tay lỡ', 'ao-so-mi-nam-tay-lo.jpg', 'Áo sơ mi nam tay lỡ cổ vuông form ôm body, màu trắng trơn đơn giản, viền nách và tay áo gọn đẹp. Chất liệu 100% cotton đốm nhẹ nhàng thoáng mát.', 160000, 30, 20, 30, 3.5, 5, 7, 10, 5, 3),
(19, 4, 4, 'Giày Adidas Alpha bounce đen', 'giay-adidas-alpha-bounce-den_200x200.jpg', 'Adidas AlphaBounce là một đôi giày adidas nam chạy bộ rất khỏe và độ bền cực tốt đó là những ấn tượng đầu tiên về giày Alphabounce tại Adidas VN. Hơn thế nữa còn là biểu tượng của sự khỏe khoắn bà sporty do chất lượng về hiệu năng cũng như tính thời trang thẩm mỹ khá là đáng chú ý đến cộng đồng giày', 350000, 16, 20, 30, 4.2, 7, 4, 2, 3, 1),
(20, 4, 4, 'Giày Adidas Yzy V2 Offwhite xám đen', 'giay-adidas-yzy-v2-offwhite-xam-den.jpg', 'Đối tượng : Giày phù hợp cho cả Nam và Nữ (tùy theo size chân của bạn) Full Box : Sản phẩm được bảo quản trong hộp Adidas khi đến tay khách hàng', 370000, 20, 15, 20, 3.8, 2, 6, 7, 2, 1),
(21, 4, 4, 'Giày adidas Yzy V2 Offwhite xám', 'giay-adidas-yzy-v2-offwhite-xam.jpg', 'Thiết kế độc đáo mang cảm hứng của dòng Boost truyền thống của Adidas giúp cho đôi giày trở nên êm ái, nhẹ nhàng và mang chân vô cùng thoải mái. Size dành cho cả Nam & Nữ từ 36 tới 43', 370000, 20, 15, 25, 4.3, 4, 7, 2, 1, 0),
(22, 4, 4, 'Giày adidas Yzy V2 Offwhite đen', 'giay-adidas-yzy-v2-offwhite-den.jpg', 'Thiết kế độc đáo mang cảm hứng của dòng Boost truyền thống của Adidas giúp cho đôi giày trở nên êm ái, nhẹ nhàng và mang chân vô cùng thoải mái. Size dành cho cả Nam & Nữ từ 36 tới 43', 370000, 20, 15, 25, 4, 3, 7, 2, 1, 0),
(23, 4, 4, 'Giày Adidas Ultraboost đen', 'giay-adidas-ultraboost-den.jpg', 'Được thiết kế với chất liệu đặc biệt, mang đến trọng lượng siêu nho cho sản phẩm, đế được làm từ cao su nhẹ, mềm, êm ái khi sử dụng, kết hợp với phần thân làm bằng vải mesh chuyên dụng cho các dòng sản phẩm thể thao, lớp dệt bằng công nghệ đặc biệt, kéo dài từ mũi đến gót chân để ôm sát khi chuyển động. Nhờ vậy, người dùng luôn cảm thấy thoáng mát cho đôi chân, thoải mái suốt cả ngày mà không lo đau chân, khó chịu khi sử dụng với cường độ cao, mà vẫn bảo vệ toàn diện cho hình dáng của đôi chân', 350000, 30, 12, 25, 3.8, 1, 5, 7, 1, 1),
(24, 5, 5, 'Quần Tây Nam No Style Dài đen', '7beac2af-9a2b-2500-183b-001506e1cb5f.jpg', 'Quầy tây phong cách công sở với chất liệu Cotton 100%, bề mặt mượt đẹp, thô thoáng. Thiết kế form dáng tinh tế, cho cảm giác kéo dài đôi chân, đẳng cấp và lịch thiệp', 425000, 10, 7, 10, 3.2, 0, 2, 4, 1, 0),
(25, 5, 5, 'Quần Tây Nam No Style Dài nâu', 'bc9c9562-4f7b-5000-3996-00130c201f8b.jpg', 'Phong cách quần Âu tạo cho phái mạnh một bề ngoài lịch lãm và lịch sự. Thiết kế với nhiều tông màu sáng như màu kem, nâu, đỏ,.....cho bạn nhiều sự lựa chọn phá cách.', 275000, 10, 5, 10, 3, 0, 1, 3, 1, 0),
(26, 5, 5, 'Quần Tây Nam No Style Dài đen xám', '0861493b-60b9-e300-7989-001516af5c03.jpg', 'Độ co giãn vừa phải, tỉ mỉ trong từng đường may. Độ bền cao, giặt nhanh khô. Hút ẩm, thấm mồ hôi, giảm nhiệt, mang lại sự thoải mái cho người mặc', 325000, 12, 6, 10, 3.2, 0, 2, 3, 1, 0),
(27, 5, 5, 'Quần Tây Nam No Style Dài đen đỏ', '62253245-ccf7-0500-eed0-00145eacee6f.jpg', 'Quần tây phong cách công sở đẳng cấp, lịch thiệp. Đường chỉ may đều đặn, chắc chắn, mịn', 375000, 11, 8, 10, 3.2, 0, 3, 3, 2, 0),
(28, 5, 5, 'Quần Tây Nam No Style Dài xanh đen', '6eaee069-d1e7-f700-bfa4-0014c50f2a81.jpg', 'Quần tây nam ống đứng là loại dễ mặc hơn cả, giúp đàn ông chân nhỏ trông to hơn và người chân to trông gọn hơn', 325000, 10, 7, 15, 3.5, 1, 3, 3, 1, 0),
(29, 6, 6, 'Áo Thun Nam KiriMaru trắng', '54e89f1b-2c1e-3600-55ca-00140b91eb5f.jpg', 'Thiết kế áo thun form basic, cổ chữ V.  - Nhiều màu sắc mới mẻ như: xanh đậu, xanh cổ vịt', 120000, 10, 8, 15, 3.6, 1, 1, 5, 1, 0),
(30, 6, 6, 'Áo Thun Nam KiriMaru đen', '80c46834-3f0d-4800-5273-00140b936093.jpg', 'Chất liệu TC 4 chiều, bề mặt mịn mượt và đẹp. - Thành phần PE trong sợi vải tăng độ bền, thích hợp với thời tiết mát mẻ.', 130000, 12, 9, 18, 3.3, 0, 2, 5, 2, 0),
(31, 6, 6, 'Áo Thun Nam KiriMaru xám đen', 'c1036f09-66d6-5000-00e8-00140b93ea4c.jpg', 'Công nghệ đặc biệt trong may dệt, hạn chế tối đa sự nhăn vải  - Đảm bảo chất lượng và Bảo hành 365 ngày.', 110000, 14, 7, 18, 3, 0, 1, 5, 1, 0),
(32, 6, 6, 'Áo Thun Nam KiriMaru xám trắng', '8d000315-a6f9-5100-d9d0-00140b93f114.jpg', 'Áo thun màu xám trắng, trẻ trung, sành điệu, là một món đồ không thể thiếu trong tủ đồ của các bạn nam.', 110000, 14, 5, 18, 3, 0, 1, 3, 1, 0),
(33, 6, 6, 'Áo Thun Nam KiriMaru xanh đá', '6a52ae29-1ca5-5200-236a-00140b93f6b2.jpg', 'Chất liệu: vải thun co giãn Mềm mịn; không xù lông Màu sắc: nhiều màu lựa chọn Thiết kế thời trang Phù hợp đi chơi; dạo phố', 110000, 14, 6, 18, 3.2, 0, 2, 3, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='thông tin người dùng';

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `phone`, `type`) VALUES
(1, 'admin', 'admin', 'admin@email.com', '0987654321', 1),
(2, 'user', 'user', 'user@mail.com', '0123456789', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD KEY `bill_id` (`bill_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `bill_list`
--
ALTER TABLE `bill_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`cat_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill_list`
--
ALTER TABLE `bill_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD CONSTRAINT `bill_detail_ibfk_1` FOREIGN KEY (`bill_id`) REFERENCES `bill_list` (`id`),
  ADD CONSTRAINT `bill_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `bill_list`
--
ALTER TABLE `bill_list`
  ADD CONSTRAINT `bill_list_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `category` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
