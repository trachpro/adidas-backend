-- MySQL dump 10.13  Distrib 5.5.57, for debian-linux-gnu (x86_64)
--
-- Host: 0.0.0.0    Database: dbadidas
-- ------------------------------------------------------
-- Server version	5.5.57-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chitietdh`
--

DROP TABLE IF EXISTS `chitietdh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chitietdh` (
  `madh` int(11) NOT NULL DEFAULT '0',
  `masp` varchar(10) NOT NULL DEFAULT '',
  `soluong` int(11) DEFAULT NULL,
  `macheck` int(11) DEFAULT NULL,
  `makh` int(11) NOT NULL,
  PRIMARY KEY (`madh`,`masp`),
  KEY `chitietdh_macheck` (`macheck`),
  KEY `chitietdh_makh` (`makh`),
  CONSTRAINT `chitietdh_macheck` FOREIGN KEY (`macheck`) REFERENCES `khachhang` (`makh`),
  CONSTRAINT `chitietdh_madh` FOREIGN KEY (`madh`) REFERENCES `donhang` (`madh`) ON DELETE CASCADE,
  CONSTRAINT `chitietdh_makh` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietdh`
--

LOCK TABLES `chitietdh` WRITE;
/*!40000 ALTER TABLE `chitietdh` DISABLE KEYS */;
INSERT INTO `chitietdh` VALUES (56,'SasdF',1,NULL,4),(56,'SasdFf',1,NULL,4);
/*!40000 ALTER TABLE `chitietdh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitiethd`
--

DROP TABLE IF EXISTS `chitiethd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chitiethd` (
  `mahd` int(11) NOT NULL DEFAULT '0',
  `masp` varchar(10) NOT NULL DEFAULT '',
  `soluong` int(11) DEFAULT NULL,
  `trangweb` varchar(30) DEFAULT NULL,
  `giaweb` varchar(20) DEFAULT NULL,
  `trietkhau` varchar(10) DEFAULT NULL,
  `khoiluong` varchar(10) DEFAULT NULL,
  `tigia` varchar(10) DEFAULT NULL,
  `macheck` int(11) DEFAULT NULL,
  `makh` int(11) DEFAULT NULL,
  `giuhop` int(11) DEFAULT NULL,
  `madh` int(11) DEFAULT NULL,
  PRIMARY KEY (`mahd`,`masp`),
  KEY `chitiethd_makh` (`makh`),
  KEY `chitiethd_macheck` (`macheck`),
  KEY `chitiethd_madhforeign` (`madh`),
  CONSTRAINT `chitiethd_macheck` FOREIGN KEY (`macheck`) REFERENCES `khachhang` (`makh`),
  CONSTRAINT `chitiethd_madhforeign` FOREIGN KEY (`madh`) REFERENCES `donhang` (`madh`),
  CONSTRAINT `chitiethd_mahd` FOREIGN KEY (`mahd`) REFERENCES `hoadon` (`mahd`) ON DELETE CASCADE,
  CONSTRAINT `chitiethd_makh` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitiethd`
--

LOCK TABLES `chitiethd` WRITE;
/*!40000 ALTER TABLE `chitiethd` DISABLE KEYS */;
INSERT INTO `chitiethd` VALUES (60,'SasdF',1,NULL,NULL,NULL,NULL,NULL,NULL,3,0,NULL),(60,'SasdFf',1,NULL,NULL,NULL,NULL,NULL,NULL,3,0,NULL),(61,'vaiadi',1,NULL,NULL,NULL,NULL,NULL,NULL,2,0,NULL);
/*!40000 ALTER TABLE `chitiethd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `choduyetkh`
--

DROP TABLE IF EXISTS `choduyetkh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `choduyetkh` (
  `makh` int(11) NOT NULL AUTO_INCREMENT,
  `tenkh` varchar(50) CHARACTER SET utf8 NOT NULL,
  `sdt` varchar(13) NOT NULL,
  `diachi` varchar(200) CHARACTER SET utf8 NOT NULL,
  `mk` varchar(20) DEFAULT NULL,
  `maloainv` int(11) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`makh`),
  KEY `choduyetkh_maloainv` (`maloainv`),
  CONSTRAINT `choduyetkh_maloainv` FOREIGN KEY (`maloainv`) REFERENCES `loainhanvien` (`maloainv`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choduyetkh`
--

LOCK TABLES `choduyetkh` WRITE;
/*!40000 ALTER TABLE `choduyetkh` DISABLE KEYS */;
/*!40000 ALTER TABLE `choduyetkh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donhang`
--

DROP TABLE IF EXISTS `donhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `donhang` (
  `madh` int(11) NOT NULL AUTO_INCREMENT,
  `ngay` varchar(15) DEFAULT NULL,
  `tienyen` varchar(30) DEFAULT NULL,
  `datcoc` varchar(30) DEFAULT NULL,
  `taikhoan` varchar(30) DEFAULT NULL,
  `thuonghieu` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `tigia` varchar(30) DEFAULT NULL,
  `trangthai` int(11) NOT NULL,
  `ghichu` text,
  `macheck` int(11) DEFAULT NULL,
  `makh` int(11) NOT NULL,
  `tendh` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`madh`),
  KEY `donhang_makh` (`makh`),
  CONSTRAINT `donhang_makh` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donhang`
--

LOCK TABLES `donhang` WRITE;
/*!40000 ALTER TABLE `donhang` DISABLE KEYS */;
INSERT INTO `donhang` VALUES (56,'1521030893004',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,4,'vailua');
/*!40000 ALTER TABLE `donhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hoadon` (
  `mahd` int(11) NOT NULL AUTO_INCREMENT,
  `madh` int(11) DEFAULT NULL,
  `ngay` varchar(15) DEFAULT NULL,
  `ngaygiao` varchar(15) DEFAULT NULL,
  `makh` int(11) NOT NULL,
  `trangthai` int(11) DEFAULT NULL,
  `datcoc` varchar(20) DEFAULT NULL,
  `ship` varchar(20) DEFAULT NULL,
  `macheck` int(11) DEFAULT NULL,
  PRIMARY KEY (`mahd`),
  KEY `hoadon_mahk` (`makh`),
  KEY `hoadon_macheck` (`macheck`),
  KEY `hoadon_madh` (`madh`),
  CONSTRAINT `hoadon_macheck` FOREIGN KEY (`macheck`) REFERENCES `khachhang` (`makh`),
  CONSTRAINT `hoadon_madh` FOREIGN KEY (`madh`) REFERENCES `donhang` (`madh`),
  CONSTRAINT `hoadon_mahk` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadon`
--

LOCK TABLES `hoadon` WRITE;
/*!40000 ALTER TABLE `hoadon` DISABLE KEYS */;
INSERT INTO `hoadon` VALUES (60,56,'1521028620003',NULL,3,1,NULL,NULL,NULL),(61,NULL,'1521030860895',NULL,2,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `hoadon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `khachhang` (
  `makh` int(11) NOT NULL AUTO_INCREMENT,
  `tenkh` varchar(50) CHARACTER SET utf8 NOT NULL,
  `sdt` varchar(13) NOT NULL,
  `diachi` varchar(200) CHARACTER SET utf8 NOT NULL,
  `mk` varchar(20) DEFAULT NULL,
  `maloainv` int(11) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`makh`),
  KEY `khachhang_maloainv` (`maloainv`),
  CONSTRAINT `khachhang_maloainv` FOREIGN KEY (`maloainv`) REFERENCES `loainhanvien` (`maloainv`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (1,'admin','1234','xuân trường - nam định','nopass',1,'trachpro'),(2,'khachhang','222','xóm 2 - xuân dục - xuân ninh','nopass',2,'vãi lúa'),(3,'khachbuon','333','xóm 2 - xuân dục - xuân ninh','nopass',3,'vãi lúa'),(4,'nguoimua','444','xóm 2 - xuân dục - xuân ninh','nopass',4,'vãi lúa'),(5,'shipper','555','xóm 2 - xuân dục - xuân ninh','nopass',5,'vãi lúa'),(11,'vaidaica','333','vãi lúa địa chỉ','adidas',2,'email');
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loainhanvien`
--

DROP TABLE IF EXISTS `loainhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loainhanvien` (
  `maloainv` int(11) NOT NULL AUTO_INCREMENT,
  `tenloainv` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`maloainv`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loainhanvien`
--

LOCK TABLES `loainhanvien` WRITE;
/*!40000 ALTER TABLE `loainhanvien` DISABLE KEYS */;
INSERT INTO `loainhanvien` VALUES (1,'admin'),(2,'khachhang'),(3,'khachbuon'),(4,'nguoimua'),(5,'shipper'),(6,'nguoinhan');
/*!40000 ALTER TABLE `loainhanvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sanpham` (
  `masp` int(11) NOT NULL AUTO_INCREMENT,
  `macode` varchar(10) NOT NULL,
  `tensp` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `trangweb` varchar(200) DEFAULT NULL,
  `giaweb` decimal(10,0) DEFAULT NULL,
  `khoiluong` float(3,3) DEFAULT NULL,
  `ghichu` text,
  PRIMARY KEY (`masp`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sanpham`
--

LOCK TABLES `sanpham` WRITE;
/*!40000 ALTER TABLE `sanpham` DISABLE KEYS */;
INSERT INTO `sanpham` VALUES (1,'e00','dienthoai','http',123,0.000,'san pham nay rat tuyet voi'),(2,'e01','dep','https',123,0.000,'san pham nay rat tuyet voit'),(3,'e02','day','httpss',123,0.000,'san pham nay rat tuyet voig');
/*!40000 ALTER TABLE `sanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trietkhau`
--

DROP TABLE IF EXISTS `trietkhau`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trietkhau` (
  `matk` int(11) NOT NULL AUTO_INCREMENT,
  `ngay` date DEFAULT NULL,
  `giatri` float(2,2) DEFAULT NULL,
  PRIMARY KEY (`matk`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trietkhau`
--

LOCK TABLES `trietkhau` WRITE;
/*!40000 ALTER TABLE `trietkhau` DISABLE KEYS */;
INSERT INTO `trietkhau` VALUES (1,'2018-01-01',0.50);
/*!40000 ALTER TABLE `trietkhau` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-16  1:44:23
