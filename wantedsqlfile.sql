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
  `madh` varchar(20) NOT NULL DEFAULT '',
  `masp` varchar(10) NOT NULL DEFAULT '',
  `soluong` int(11) DEFAULT NULL,
  `giuhop` int(11) DEFAULT NULL,
  PRIMARY KEY (`madh`,`masp`),
  CONSTRAINT `chitietdh_madh` FOREIGN KEY (`madh`) REFERENCES `donhang` (`madh`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietdh`
--

LOCK TABLES `chitietdh` WRITE;
/*!40000 ALTER TABLE `chitietdh` DISABLE KEYS */;
INSERT INTO `chitietdh` VALUES ('41','afsd',3,3),('41','mthds',6,4),('F','dff',1,1),('F','MT12',6,6),('F','MTH',1,0),('F','MTH1',1,1),('Ghe','MTK12',1,1),('MDAS','gg',1,0),('MDAS','gg1',1,0),('MDAS','S80787-275',1,0),('MDAS','vas',1,1),('MTC1234','1233',131,131),('MTC1234','123ff',7,0),('MTC1234','ECT12-12',1,1),('MTC1234','ECT12-13',1,1),('MTC1234','ECT12-14',1,1),('NGT123','PNG-21',100,100),('NGT123','TMK2',119,119),('NGT123','TMK25',119,119);
/*!40000 ALTER TABLE `chitietdh` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`trachdaik`@`%`*/ /*!50003 trigger chitietdh_create
  after insert on chitietdh 
  for each row
  begin
  update donhang
  set tongsl = tongsl + new.soluong, giuhop = giuhop + new.giuhop
  where new.madh = madh;
  end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`trachdaik`@`%`*/ /*!50003 trigger chitietdh_update
  after update on chitietdh 
  for each row
  begin
  update donhang
  set tongsl = tongsl + new.soluong - old.soluong, giuhop = giuhop + new.giuhop - old.giuhop
  where new.madh = madh;
  end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`trachdaik`@`%`*/ /*!50003 trigger chitietdh_drop
  before delete on chitietdh 
  for each row
  begin
  update donhang
  set tongsl = tongsl + old.soluong, giuhop = giuhop + old.giuhop
  where old.madh = madh;
  end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
  `giaweb` decimal(10,0) DEFAULT NULL,
  `trietkhau` float DEFAULT NULL,
  `khoiluong` float DEFAULT NULL,
  `tigia` int(11) DEFAULT NULL,
  `giuhop` int(11) DEFAULT NULL,
  `thuonghieu` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`mahd`,`masp`),
  CONSTRAINT `chitiethd_mahd` FOREIGN KEY (`mahd`) REFERENCES `hoadon` (`mahd`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitiethd`
--

LOCK TABLES `chitiethd` WRITE;
/*!40000 ALTER TABLE `chitiethd` DISABLE KEYS */;
INSERT INTO `chitiethd` VALUES (75,'ECT12-12',1,123,123,123,123,1,NULL),(75,'ECT12-13',1,123,123,123,123,1,NULL),(75,'ECT12-14',1,123,123,123,123,1,NULL),(76,'123ff',7,123,123,1234,123,0,NULL),(76,'123ffg',7,123,NULL,NULL,NULL,0,NULL),(77,'1233',131,123,311,123,11111111,131,NULL),(78,'MT12',6,1200,0.05,3,216,6,NULL),(79,'MTK12',1,12,31,123,1223,1,NULL),(80,'MTH',1,123,12,13,122,0,NULL),(80,'MTH1',1,123,12,13,122,1,NULL),(81,'dff',1,2102,0.85,NULL,1,1,NULL),(82,'S80787-275',1,11800,0.85,NULL,NULL,0,NULL),(85,'gg',1,4,0.85,0,NULL,0,NULL),(85,'gg1',1,6,0.85,0,NULL,0,NULL),(86,'vas',1,5,0.85,0,NULL,1,NULL),(87,'mthds',6,123,0.85,0,NULL,4,NULL),(88,'afsd',3,127,0.85,122,NULL,3,NULL),(89,'TMK2',119,119,0.85,121,NULL,119,NULL),(89,'TMK25',119,119,NULL,NULL,NULL,119,NULL),(90,'PNG-21',100,7000,0.85,0,NULL,100,NULL);
/*!40000 ALTER TABLE `chitiethd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietnh`
--

DROP TABLE IF EXISTS `chitietnh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chitietnh` (
  `manh` int(11) NOT NULL DEFAULT '0',
  `madh` varchar(20) NOT NULL DEFAULT '',
  `soluong` int(11) DEFAULT NULL,
  `khoiluong` float NOT NULL DEFAULT '0',
  `giuhop` int(11) DEFAULT NULL,
  PRIMARY KEY (`manh`,`madh`),
  KEY `chitietnh_madh` (`madh`),
  CONSTRAINT `chitietnh_madh` FOREIGN KEY (`madh`) REFERENCES `donhang` (`madh`),
  CONSTRAINT `chitietnh_manh` FOREIGN KEY (`manh`) REFERENCES `nhanhang` (`manh`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietnh`
--

LOCK TABLES `chitietnh` WRITE;
/*!40000 ALTER TABLE `chitietnh` DISABLE KEYS */;
INSERT INTO `chitietnh` VALUES (27,'MTC1234',141,131,134),(31,'F',9,0,8),(31,'MDAS',4,0,1),(32,'NGT123',338,0,338);
/*!40000 ALTER TABLE `chitietnh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `choduyetcthd`
--

DROP TABLE IF EXISTS `choduyetcthd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `choduyetcthd` (
  `mahd` int(11) NOT NULL DEFAULT '0',
  `masp` varchar(15) NOT NULL DEFAULT '',
  `soluong` int(11) DEFAULT NULL,
  `giuhop` int(11) DEFAULT NULL,
  `giaweb` decimal(10,0) DEFAULT NULL,
  `thuonghieu` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`mahd`,`masp`),
  CONSTRAINT `choduyetcthd_mahd` FOREIGN KEY (`mahd`) REFERENCES `choduyethd` (`mahd`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choduyetcthd`
--

LOCK TABLES `choduyetcthd` WRITE;
/*!40000 ALTER TABLE `choduyetcthd` DISABLE KEYS */;
/*!40000 ALTER TABLE `choduyetcthd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `choduyetdh`
--

DROP TABLE IF EXISTS `choduyetdh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `choduyetdh` (
  `madh` varchar(20) NOT NULL DEFAULT '',
  `tienyen` decimal(10,0) DEFAULT NULL,
  `datcoc` decimal(10,0) DEFAULT NULL,
  `tigia` decimal(15,0) DEFAULT NULL,
  `makh` int(11) NOT NULL,
  PRIMARY KEY (`madh`),
  KEY `choduyetdh_makh` (`makh`),
  CONSTRAINT `choduyetdh_makh` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choduyetdh`
--

LOCK TABLES `choduyetdh` WRITE;
/*!40000 ALTER TABLE `choduyetdh` DISABLE KEYS */;
INSERT INTO `choduyetdh` VALUES ('SDF1',123,123,999999999999999,14);
/*!40000 ALTER TABLE `choduyetdh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `choduyethd`
--

DROP TABLE IF EXISTS `choduyethd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `choduyethd` (
  `mahd` int(11) NOT NULL AUTO_INCREMENT,
  `ngay` varchar(15) DEFAULT NULL,
  `makh` int(11) DEFAULT NULL,
  `maduyetkh` int(11) DEFAULT NULL,
  `datcoc` decimal(10,0) DEFAULT NULL,
  `thuonghieu` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`mahd`),
  KEY `choduyethd_makh` (`makh`),
  KEY `choduyethd_maduyetkh` (`maduyetkh`),
  CONSTRAINT `choduyethd_maduyetkh` FOREIGN KEY (`maduyetkh`) REFERENCES `choduyetkh` (`maduyetkh`),
  CONSTRAINT `choduyethd_makh` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choduyethd`
--

LOCK TABLES `choduyethd` WRITE;
/*!40000 ALTER TABLE `choduyethd` DISABLE KEYS */;
/*!40000 ALTER TABLE `choduyethd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `choduyetkh`
--

DROP TABLE IF EXISTS `choduyetkh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `choduyetkh` (
  `tenkh` varchar(50) CHARACTER SET utf8 NOT NULL,
  `sdt` varchar(13) NOT NULL,
  `diachi` varchar(200) CHARACTER SET utf8 NOT NULL,
  `mk` varchar(20) DEFAULT NULL,
  `maloainv` int(11) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `maduyetkh` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`maduyetkh`),
  KEY `choduyetkh_maloainv` (`maloainv`),
  CONSTRAINT `choduyetkh_maloainv` FOREIGN KEY (`maloainv`) REFERENCES `loainhanvien` (`maloainv`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choduyetkh`
--

LOCK TABLES `choduyetkh` WRITE;
/*!40000 ALTER TABLE `choduyetkh` DISABLE KEYS */;
INSERT INTO `choduyetkh` VALUES ('Pham Minh Tu','0981349672','','adidas',3,NULL,1);
/*!40000 ALTER TABLE `choduyetkh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `choduyetnh`
--

DROP TABLE IF EXISTS `choduyetnh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `choduyetnh` (
  `manh` int(11) NOT NULL,
  `khoiluong` float DEFAULT NULL,
  `dongia` float DEFAULT NULL,
  `tigia` float DEFAULT NULL,
  `phuphi` decimal(10,0) DEFAULT NULL,
  `makh` int(11) NOT NULL,
  `ngay` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`manh`),
  KEY `choduyetnh_makh` (`makh`),
  CONSTRAINT `choduyetnh_makh` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choduyetnh`
--

LOCK TABLES `choduyetnh` WRITE;
/*!40000 ALTER TABLE `choduyetnh` DISABLE KEYS */;
INSERT INTO `choduyetnh` VALUES (0,NULL,NULL,NULL,NULL,13,NULL),(26,1111,311,NULL,12,13,'1521690741635'),(27,20,1234,NULL,20000,13,'1521743933169');
/*!40000 ALTER TABLE `choduyetnh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donhang`
--

DROP TABLE IF EXISTS `donhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `donhang` (
  `madh` varchar(20) NOT NULL,
  `ngay` decimal(15,0) DEFAULT NULL,
  `tienyen` decimal(10,0) DEFAULT NULL,
  `datcoc` decimal(10,0) DEFAULT NULL,
  `taikhoan` varchar(30) DEFAULT NULL,
  `thuonghieu` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `tigia` decimal(10,0) DEFAULT NULL,
  `trangthai` int(2) DEFAULT NULL,
  `ghichu` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `makh` int(11) NOT NULL,
  `manh` int(11) DEFAULT NULL,
  `tongsl` int(11) NOT NULL DEFAULT '0',
  `giuhop` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`madh`),
  KEY `donhang_makh` (`makh`),
  KEY `donhang_manh` (`manh`),
  CONSTRAINT `donhang_makh` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`),
  CONSTRAINT `donhang_manh` FOREIGN KEY (`manh`) REFERENCES `nhanhang` (`manh`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donhang`
--

LOCK TABLES `donhang` WRITE;
/*!40000 ALTER TABLE `donhang` DISABLE KEYS */;
INSERT INTO `donhang` VALUES ('41',1521849365357,312,312,'12','adidas',216,3,'cũng chẳng biết cái j luôn\n',4,NULL,9,7),('F',1521665501634,1234,1212,'FASDasdf','adidas',216,5,'Hôm Nay Hơi Muộn',4,31,9,8),('Ghe',1521792034422,312,12,'Mkr','nike',216,3,NULL,12,NULL,1,1),('MDAS',1521871091495,NULL,NULL,'adf','adidas',216,5,NULL,12,31,4,1),('MTC1234',1521620086138,123,123,'adiadas1023','adidas',216,8,'sdf',4,27,141,134),('NGT123',1521994329898,NULL,NULL,'adidas2016','adidas',216,8,NULL,12,32,338,338);
/*!40000 ALTER TABLE `donhang` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`trachdaik`@`%`*/ /*!50003 trigger update_status_donhang after update on donhang for each row begin update hoadon set trangthai = new.trangthai where new.madh = madh; end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hoadon` (
  `mahd` int(11) NOT NULL AUTO_INCREMENT,
  `madh` varchar(20) DEFAULT NULL,
  `ngay` decimal(15,0) DEFAULT NULL,
  `ngaygiao` varchar(15) DEFAULT NULL,
  `makh` int(11) NOT NULL,
  `trangthai` int(2) DEFAULT NULL,
  `datcoc` decimal(10,0) DEFAULT NULL,
  `ship` decimal(10,0) DEFAULT NULL,
  `thuonghieu` varchar(20) DEFAULT NULL,
  `phuphi` decimal(10,0) NOT NULL DEFAULT '0',
  `tigia` int(11) NOT NULL DEFAULT '0',
  `thanhtien` decimal(10,0) NOT NULL DEFAULT '0',
  PRIMARY KEY (`mahd`),
  KEY `hoadon_mahk` (`makh`),
  KEY `hoadon_madh` (`madh`),
  CONSTRAINT `hoadon_madh` FOREIGN KEY (`madh`) REFERENCES `donhang` (`madh`),
  CONSTRAINT `hoadon_mahk` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadon`
--

LOCK TABLES `hoadon` WRITE;
/*!40000 ALTER TABLE `hoadon` DISABLE KEYS */;
INSERT INTO `hoadon` VALUES (75,'MTC1234',1521604029788,NULL,2,8,123,1234,NULL,0,216,9804826),(76,'MTC1234',1521604068009,NULL,3,8,123,123,NULL,0,216,22875171),(77,'MTC1234',1521604091358,NULL,4,8,111111111,11111111,'adidas',0,216,1093517999),(78,'F',1521662785049,NULL,3,5,1400000,21000,'Adidas',0,216,98760),(79,'Ghe',1521662866795,NULL,3,3,1200000,231,'nike',0,216,0),(80,'F',1521664285855,NULL,2,5,123,123,'adidas',0,216,637755),(81,'F',1521664526534,NULL,3,5,100000,123000,'adidas',0,216,0),(82,'MDAS',1521812355677,NULL,15,5,NULL,NULL,'adidas',0,216,2166480),(85,'MDAS',1521840811244,NULL,2,5,0,0,'adidas',123,216,1959),(86,'MDAS',1521840981889,NULL,3,5,0,0,'adidas',12,220,947),(87,'41',1521841190568,NULL,2,3,0,12,'adidas',331,216,135840),(88,'41',1521841442396,NULL,3,3,0,20,'adidas',123,220,71370),(89,'NGT123',1521886082326,NULL,3,8,400006,123,'adidas',1233333,220,3881563),(90,'NGT123',1521994162177,NULL,20,8,0,0,'adidas',0,2160,1285200000);
/*!40000 ALTER TABLE `hoadon` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`trachdaik`@`%`*/ /*!50003 trigger update_status_hoadon before update on hoadon for each row begin if new.madh is null then set new.trangthai = 2; end if; end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
  `tigia` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`makh`),
  UNIQUE KEY `sdt` (`sdt`),
  KEY `khachhang_maloainv` (`maloainv`),
  CONSTRAINT `khachhang_maloainv` FOREIGN KEY (`maloainv`) REFERENCES `loainhanvien` (`maloainv`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (1,'admin','1234','xuân trường - nam định','nopass',1,'trachpro',0),(2,'khachhang','222','xóm 2 - xuân dục - xuân ninh','nopass',2,'vãi lúa',0),(3,'khachbuon','333','xóm 2 - xuân dục - xuân ninh','nopass',3,'vãi lúa',4),(4,'nguoimua','444','xóm 2 - xuân dục - xuân ninh','nopass',4,'vãi lúa',0),(5,'shipper','555','xóm 2 - xuân dục - xuân ninh','nopass',5,'vãi lúa',0),(11,'vaidaica','1222','vãi lúa địa chỉ','adidas',2,'email',0),(12,'trachpro','12345','','adidas',4,NULL,0),(13,'nhan di em','666','','nopass',6,NULL,0),(14,'Người Thanh Toán','4444','','adidas',4,NULL,0),(15,'Anh Khoa','0933121416','444 Cách Mạng Tháng 8 Phường 1','adidas',2,'gmail.com',0),(17,'vailua','987123','','adidas',2,NULL,0),(19,'người nhận hàng','6666','','nopass',6,NULL,0),(20,'Ngoc Tan','0943729682','Nam Định','adidas',2,NULL,0);
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
-- Table structure for table `nhanhang`
--

DROP TABLE IF EXISTS `nhanhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nhanhang` (
  `manh` int(11) NOT NULL AUTO_INCREMENT,
  `soluong` int(11) DEFAULT NULL,
  `trangthai` int(2) DEFAULT NULL,
  `khoiluong` float DEFAULT NULL,
  `dongia` int(11) DEFAULT NULL,
  `ngay` decimal(15,0) DEFAULT NULL,
  `makh` int(11) NOT NULL,
  `phuphi` decimal(10,0) DEFAULT NULL,
  `datcoc` decimal(10,0) NOT NULL DEFAULT '0',
  `ghichu` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `ngaynhan` decimal(15,0) DEFAULT NULL,
  PRIMARY KEY (`manh`),
  KEY `nhanhang_makh` (`makh`),
  CONSTRAINT `nhanhang_makh` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanhang`
--

LOCK TABLES `nhanhang` WRITE;
/*!40000 ALTER TABLE `nhanhang` DISABLE KEYS */;
INSERT INTO `nhanhang` VALUES (27,NULL,8,20,30000,1521743933169,13,20000,0,'kong co nhieu ghi chu lắm',1521915958674),(31,NULL,5,12,400000,1521884572806,13,123000,0,NULL,NULL),(32,NULL,8,70,300000,1521994360211,13,2000000,0,'Ghe lắm đấy chứ',1521994454260);
/*!40000 ALTER TABLE `nhanhang` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`trachdaik`@`%`*/ /*!50003 trigger update_status_nhanhang after update on nhanhang for each row begin update donhang set trangthai = new.trangthai where manh = new.manh; end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
-- Table structure for table `tigia`
--

DROP TABLE IF EXISTS `tigia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tigia` (
  `matg` int(11) NOT NULL AUTO_INCREMENT,
  `giatri` int(11) DEFAULT NULL,
  `ngay` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`matg`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tigia`
--

LOCK TABLES `tigia` WRITE;
/*!40000 ALTER TABLE `tigia` DISABLE KEYS */;
/*!40000 ALTER TABLE `tigia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-26  9:14:30
