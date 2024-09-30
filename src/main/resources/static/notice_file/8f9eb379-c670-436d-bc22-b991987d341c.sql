-- MySQL dump 10.13  Distrib 8.4.0, for Win64 (x86_64)
--
-- Host: localhost    Database: erp
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mall_member`
--

DROP TABLE IF EXISTS `mall_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mall_member` (
  `midx` int unsigned NOT NULL AUTO_INCREMENT,
  `mall_id` varchar(30) NOT NULL,
  `mall_pw` varchar(50) NOT NULL,
  `mall_name` char(30) NOT NULL,
  `tel_corp` enum('SKT','KT','LGT','알뜰폰') NOT NULL,
  `tel_no` varchar(13) NOT NULL DEFAULT '000-0000-0000',
  `mall_email` varchar(40) NOT NULL,
  `mall_post` char(5) NOT NULL,
  `mall_road` varchar(100) NOT NULL,
  `mall_addr` varchar(100) NOT NULL,
  `ad_sms` enum('Y','N') NOT NULL DEFAULT 'N',
  `ad_email` enum('Y','N') NOT NULL DEFAULT 'N',
  `mall_join` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`midx`),
  UNIQUE KEY `mb1` (`mall_id`),
  UNIQUE KEY `mb2` (`tel_no`),
  UNIQUE KEY `mb3` (`mall_email`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mall_member`
--

LOCK TABLES `mall_member` WRITE;
/*!40000 ALTER TABLE `mall_member` DISABLE KEYS */;
INSERT INTO `mall_member` VALUES (1,'rio0405','WFzb24sIGJ1dCAuLi4=','강휘','SKT','010-9113-3355','gayadns@hanmail.n`et','05054','서울 영등포구 영중로83(영등포동 7가)','11-2','Y','Y','2024-06-01 03:22:06'),(2,'yeun25','WFzb24sIGJ1dCAuLi4=','김나린','KT','010-7331-9632','nami@nandesign.kr','04332','서울 동작구 보라매로 5길 35, 401(신대방동)','4F','N','Y','2024-06-01 04:56:07'),(3,'ara7615','WFzb24sIGJ1dCAuLi4=','김단희','LGT','010-0013-0840','shs2053@naver.com','04881','서울 서초구 강남대로27, 601호','22-6','N','N','2024-06-01 06:42:18'),(4,'onemsa','WFzb24sIGJ1dCAuLi4=','김민지','SKT','010-2619-1679','bokur@nate.com','05336','강원 정선군 사북읍 하이원길 265','38-7','Y','Y','2024-06-01 10:50:09'),(5,'esy81809','WFzb24sIGJ1dCAuLi4=','김선숙','LGT','010-3837-2307','nanamcom@naver.com','05337','경기 김포시 고촌읍 아라육로 270번길 74','61-2 3층','Y','N','2024-06-01 15:22:10'),(6,'ravi3771','WFzb24sIGJ1dCAuLi4=','김지현','SKT','010-0137-9567','kodong9370@naver.com','05338','경기 유성구 대덕대로 1227','23-1 20F','N','Y','2024-06-02 02:04:11'),(7,'wate0001','WFzb24sIGJ1dCAuLi4=','김하주','KT','010-3267-9567','green97210@hanmail.net','05339','경북 김천시 혁신2로 40(율곡동790)','91-2','Y','Y','2024-06-03 05:22:52'),(8,'patrick','WFzb24sIGJ1dCAuLi4=','명동건','LGT','010-4152-7906','boomia12@nizspace.com','19698','경기 용인시 기흥구 석성로 521번길 169(청덕동)','11동 308호','Y','Y','2024-06-04 05:52:13'),(9,'chlvlftjsrkq','WFzb24sIGJ1dCAuLi4=','박성현','KT','010-3180-4355','krgasi@nate.com','06811','경기 고양시 일산동구 정발산로 24 웨스턴타워 4동 8층, 9층','9층 32호','Y','N','2024-06-05 02:02:14'),(10,'juyoun1231','WFzb24sIGJ1dCAuLi4=','박세은','SKT','010-5137-1188','goldens_no1@naver.com','05342','충북 아름서길 21','2-2','N','Y','2024-06-05 04:00:45'),(11,'miss104','WFzb24sIGJ1dCAuLi4=','서은진','KT','010-7230-1210','nurian22@daum.net','01036','강원 강릉시 죽헌길 7','25-1 205동 401호','Y','N','2024-06-05 11:12:16'),(12,'leegu','WFzb24sIGJ1dCAuLi4=','신영남','LGT','010-1138-8456','jb@kyungsu.co.kr','01024','강원 춘천시 백령로 156','5-2 6F','Y','Y','2024-06-06 00:08:11'),(13,'rosie','WFzb24sIGJ1dCAuLi4=','심지원','KT','010-3870-6310','sarang9671@nate.com','05345','강원 원주시 혁신로 60','23-1 27F','Y','N','2024-06-06 02:01:18'),(14,'only2441','WFzb24sIGJ1dCAuLi4=','이윤석','LGT','010-4307-5448','kdf119@naver.com','04032','서울 중구 남대문로 109(국제빌딩)','11-6 3F 311호','N','Y','2024-06-07 06:22:49'),(15,'iskany1','WFzb24sIGJ1dCAuLi4=','이항휘','SKT','010-2330-1439','care0105@naver.com','26224','부산 해운대구 센텀서로 39 영상산업센터 1,2층','6동 201호','Y','N','2024-06-07 08:42:20'),(16,'snow4','WFzb24sIGJ1dCAuLi4=','이희우','KT','010-6813-4521','cois3001@naver.com','36412','서울 중구 동덕로130','5-5 1F','Y','Y','2024-06-08 01:22:31'),(17,'happyhero7','WFzb24sIGJ1dCAuLi4=','임성민','LGT','010-1137-8949','cjt831@hanmail.net','09091','서울 중구 달구벌대로 2175','23동 17호','N','Y','2024-06-08 09:16:22'),(18,'pamela','WFzb24sIGJ1dCAuLi4=','최연욱','SKT','010-0074-3858','kyoung-dong@hanmail.net','04321','전북 진주시 강남로 79','206동 307호','Y','Y','2024-06-09 03:02:23'),(19,'luck0707','WFzb24sIGJ1dCAuLi4=','최하영','KT','010-9587-5296','menu008@hanmail.net','05332','세종 시청대로 370 세종국책연구단지 연구지원동(A) 4, 8~9층','8층 201호','Y','Y','2024-06-09 07:48:24'),(20,'bague','WFzb24sIGJ1dCAuLi4=','최한결','SKT','010-8587-0614','gaon@gaon.pe.kr','36412','제주 서귀포시 서호중앙로 63','22','Y','N','2024-06-10 08:42:55'),(21,'apink','WFzb24sIGJ1dCAuLi4=','하현수','SKT','010-5247-8398','9666308@hanmail.net','05334','세종 시청대로 370 세종국책연구단지 과학ㆍ인프라동(B동) 5,6,7층, 연구지원동(A동) 3층','7층 705호','N','N','2024-06-10 12:03:26'),(22,'m2mb1004','WFzb24sIGJ1dCAuLi4=','홍범기','SKT','010-4251-3945','zoro0309@naver.com','03034','울산 북구 첨단과기로 123 (오룡동)','61-2','Y','Y','2024-06-11 01:52:17');
/*!40000 ALTER TABLE `mall_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mall_product`
--

DROP TABLE IF EXISTS `mall_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mall_product` (
  `pidx` int unsigned NOT NULL AUTO_INCREMENT,
  `pcate` varchar(80) NOT NULL,
  `pcode` char(20) NOT NULL,
  `pname` varchar(100) NOT NULL,
  `pmoney` int NOT NULL,
  `psales` char(8) NOT NULL,
  `puse` enum('Y','N') NOT NULL DEFAULT 'Y',
  `pindate` date DEFAULT (curdate()),
  PRIMARY KEY (`pidx`),
  UNIQUE KEY `pd` (`pcode`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mall_product`
--

LOCK TABLES `mall_product` WRITE;
/*!40000 ALTER TABLE `mall_product` DISABLE KEYS */;
INSERT INTO `mall_product` VALUES (1,'지갑','68326566','디올 남성 오블리스크 비즈니스 카드 지갑 2ESCH163YSE_H05E',340000,'272000','Y','2024-05-13'),(2,'지갑','63643623','셀린느 트리오페 로고 프린트 카드 홀더 지갑 10B702CLY.04LU',284000,'269800','Y','2024-05-13'),(3,'헤어리본','63588168','샤넬 CC 블랙 리본 헤어슈슈 스크런치 AA9304 B13484 94305',658000,'592200','Y','2024-05-15'),(4,'팔찌','63491754','샤넬 CC 참 펄 진주 팔찌 A86499 Y09902 Z2953',1150000,'805000','Y','2024-05-15'),(5,'귀걸이','63491330','샤넬 CC 실버 디아망떼 펄 진주 드롭 귀걸이 A36138 Y02005 Z2354',8890000,'7112000','N','2024-05-15'),(6,'기본','63490842','샤넬 CC 버니 리본 헤어리본 슈슈 AA8925 B10402 NM732',180000,'0','Y','2024-05-15'),(7,'귀걸이','63485464','샤넬 CC 골드 크리스탈 나뭇잎 귀걸이 ABA545 B10721 NN527',550000,'440000','Y','2024-05-15'),(8,'브로치','63442813','샤넬 CC 블랙 화이트 하프 브로치 AB9786 B09803 NL456',320000,'0','Y','2024-05-20'),(9,'귀걸이','63439331','샤넬 CC 골드 크리스탈 하프 귀걸이 ABA545 B10721 NN527',278000,'0','Y','2024-05-20'),(10,'셔츠','1412210417','TH-블락체크 셔츠-그레이2',65000,'0','N','2024-05-20'),(11,'바지','1405042530','베이직 기모 레글런 오트밀레드2 [10만원 이상 무료]',186000,'148800','Y','2024-05-20'),(12,'셔츠','1404980700','TH-블락체크 셔츠-그레이2 [착불]',115000,'97750','Y','2024-05-20'),(13,'셔츠','1403059869','TH-베이직 슬림셔츠 베이지[무옵션]',86000,'70520','Y','2024-05-25'),(14,'셔츠','1387873039','TH-워싱 스트레치 카고 다크브라운2',48000,'38400','Y','2024-05-25'),(15,'셔츠','1387873021','TH-블락체크 셔츠-블루2',50000,'40000','N','2024-05-25'),(16,'셔츠','1387871851','베이직 기모 레글런 오트밀레드2',38400,'29952','Y','2024-05-25'),(17,'셔츠','1387871714','베이직 기모 레글런 차콜레드2',57000,'54150','N','2024-05-25'),(18,'셔츠','1387870220','TH-베이직 슬림셔츠 와인',44000,'41800','Y','2024-05-25'),(20,'바지','1387872813','TH-워싱 스트레치 카고 베이지',84000,'75600','N','2024-05-25'),(21,'바지','1387873022','TH-워싱 스트레치 카고 와인2',78000,'0','Y','2024-05-25');
/*!40000 ALTER TABLE `mall_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pays`
--

DROP TABLE IF EXISTS `pays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pays` (
  `idx` int unsigned NOT NULL AUTO_INCREMENT,
  `mall_id` varchar(30) NOT NULL,
  `pcode` char(20) NOT NULL,
  `pay_part` enum('card','cash') NOT NULL,
  `pay_money` int NOT NULL,
  `pay_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idx`),
  KEY `mall_id` (`mall_id`),
  KEY `pcode` (`pcode`),
  CONSTRAINT `pays_ibfk_1` FOREIGN KEY (`mall_id`) REFERENCES `mall_member` (`mall_id`),
  CONSTRAINT `pays_ibfk_2` FOREIGN KEY (`pcode`) REFERENCES `mall_product` (`pcode`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pays`
--

LOCK TABLES `pays` WRITE;
/*!40000 ALTER TABLE `pays` DISABLE KEYS */;
INSERT INTO `pays` VALUES (1,'rio0405','63490842','card',180000,'2024-06-05 16:39:28'),(2,'juyoun1231','1387873021','cash',78000,'2024-06-06 10:39:49'),(3,'esy81809','63439331','card',278000,'2024-06-07 16:42:52'),(4,'ara7615','63643623','card',269800,'2024-06-07 16:51:40'),(5,'happyhero7','1404980700','card',97750,'2024-06-09 15:27:00'),(6,'luck0707','1387870220','cash',41800,'2024-06-09 17:08:04'),(7,'m2mb1004','1387870220','card',41800,'2024-06-11 11:48:21'),(8,'ara7615','63643623','card',269800,'2024-06-12 16:08:10'),(9,'wate0001','68326566','card',272000,'2024-06-13 11:52:12');
/*!40000 ALTER TABLE `pays` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `points`
--

DROP TABLE IF EXISTS `points`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `points` (
  `pidx` int unsigned NOT NULL AUTO_INCREMENT,
  `mall_id` varchar(30) NOT NULL,
  `mall_point` int NOT NULL,
  `point_contents` char(50) NOT NULL,
  `point_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`pidx`),
  KEY `mall_id` (`mall_id`),
  CONSTRAINT `points_ibfk_1` FOREIGN KEY (`mall_id`) REFERENCES `mall_member` (`mall_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `points`
--

LOCK TABLES `points` WRITE;
/*!40000 ALTER TABLE `points` DISABLE KEYS */;
INSERT INTO `points` VALUES (1,'rio0405',1000,'신규가입','2024-06-01 03:22:06'),(2,'yeun25',1000,'신규가입','2024-06-01 04:56:07'),(3,'ara7615',1000,'신규가입','2024-06-01 06:42:18'),(4,'onemsa',1000,'신규가입','2024-06-01 10:50:09'),(5,'esy81809',1000,'신규가입','2024-06-01 15:22:10'),(6,'ravi3771',1000,'신규가입','2024-06-02 02:04:11'),(7,'wate0001',1000,'신규가입','2024-06-03 05:22:52'),(8,'patrick',1000,'신규가입','2024-06-04 05:52:13'),(9,'chlvlftjsrkq',1000,'신규가입','2024-06-05 02:02:14'),(10,'rio0405',1400,'상품구매','2024-06-05 07:39:28'),(11,'juyoun1231',1000,'신규가입','2024-06-05 04:00:45'),(12,'miss104',1000,'신규가입','2024-06-05 11:12:16'),(13,'leegu',1000,'신규가입','2024-06-06 00:08:11'),(14,'juyoun1231',860,'상품구매','2024-06-06 01:39:49'),(15,'rosie',1000,'신규가입','2024-06-06 02:01:18'),(16,'only2441',1000,'신규가입','2024-06-07 06:22:49'),(17,'esy81809',910,'상품구매','2024-06-07 07:42:52'),(18,'ara7615',1120,'상품구매','2024-06-07 07:51:40'),(19,'iskany1',1000,'신규가입','2024-06-07 08:42:20'),(20,'snow4',1000,'신규가입','2024-06-08 01:22:31'),(21,'happyhero7',1000,'신규가입','2024-06-08 09:16:22'),(22,'pamela',1000,'신규가입','2024-06-09 03:02:23'),(23,'happyhero7',520,'상품구매','2024-06-09 06:27:00'),(24,'luck0707',1000,'신규가입','2024-06-09 07:48:24'),(25,'luck0707',2200,'상품구매','2024-06-09 08:08:04'),(26,'bague',1000,'신규가입','2024-06-10 08:42:55'),(27,'apink',1000,'신규가입','2024-06-10 12:03:26'),(28,'m2mb1004',1000,'신규가입','2024-06-11 01:52:17'),(29,'m2mb1004',2000,'상품구매','2024-06-11 02:48:21'),(30,'ara7615',2820,'상품구매','2024-06-12 07:08:10'),(31,'wate0001',1680,'상품구매','2024-06-13 02:52:12');
/*!40000 ALTER TABLE `points` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-24 13:56:55
