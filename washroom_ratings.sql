# ************************************************************
#
#
# Host: localhost (MySQL 5.7.20)
# Database: washroom_ratings
# Generation Time: 2017-12-09 03:32:42 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table BATHROOM
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BATHROOM`;

CREATE TABLE `BATHROOM` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `stall_num` int(11) DEFAULT NULL,
  `description` text,
  `open` tinyint(1) DEFAULT '1',
  `wheelchair` tinyint(1) DEFAULT '0',
  `building` text NOT NULL,
  `room_num` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `BATHROOM` WRITE;
/*!40000 ALTER TABLE `BATHROOM` DISABLE KEYS */;

INSERT INTO `BATHROOM` (`id`, `stall_num`, `description`, `open`, `wheelchair`, `building`, `room_num`)
VALUES
	(57,2,'Kines',0,0,'KNB',323),
	(58,2,'In a stupid building',1,1,'TI',145),
	(361,1,'IN DA LIBRARY',0,1,'TFDL',123),
	(377,2,'A great washroom, had an awesome time!',1,1,'CHC',341),
	(420,5,'Engineering',0,1,'ENF',333),
	(463,2,'Near the labs',1,1,'EEEL',323),
	(630,2,'Great location ',0,1,'TFDL',651),
	(637,2,'Oval',1,1,'OO',323),
	(685,1,'Washroom near the large science theatres',1,0,'ST',213),
	(747,2,'Lots of stairs to get here',0,1,'SS',341),
	(813,1,'In Craigie ',0,0,'MFH',342),
	(859,2,'In Bio sciences',1,1,'BI',111),
	(881,2,'Wonderful spot for engineers',1,0,'ENG',222),
	(899,20,'Under construction currently ',0,0,'ART',621),
	(905,1,'The best washroom ever',1,1,'MSC',231),
	(937,2,'In haskayne ',1,1,'SH',222);

/*!40000 ALTER TABLE `BATHROOM` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table COMMENT
# ------------------------------------------------------------

DROP TABLE IF EXISTS `COMMENT`;

CREATE TABLE `COMMENT` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `comment` text NOT NULL,
  `date` text,
  `ordering` bigint(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `rating_id` FOREIGN KEY (`id`) REFERENCES `RATING` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `COMMENT` WRITE;
/*!40000 ALTER TABLE `COMMENT` DISABLE KEYS */;

INSERT INTO `COMMENT` (`id`, `comment`, `date`, `ordering`)
VALUES
	(17,'Really like this building, especially when first years blow stuff up','12/8/2017, 7:31:06 PM',1512786666022),
	(58,'So crapy :) ','12/8/2017, 7:44:06 PM',1512787446066),
	(104,'There Isn\'t actually a 3rd floor In Kines, I\'m lost!','12/8/2017, 7:21:41 PM',1512786101114),
	(126,'Haskayne Sucks!','12/8/2017, 7:46:19 PM',1512787579131),
	(146,'Not a huge fan!','12/8/2017, 7:56:27 PM',1512788187147),
	(290,'Love the 6th floor, theres nobody ever around','12/8/2017, 7:32:50 PM',1512786770293),
	(299,'Asbestus in the walls!','12/8/2017, 7:19:44 PM',1512785984310),
	(302,'My favourite washroom ever!!!','12/8/2017, 7:55:49 PM',1512788149304),
	(326,'The best, Very Private','12/8/2017, 7:56:09 PM',1512788169327),
	(331,'This is such a useless building, I only went here because I really had to go','12/8/2017, 7:23:07 PM',1512786187332),
	(428,'One time I really had to go while I was speed skating, this washroom saved my butt!','12/8/2017, 7:33:53 PM',1512786833433),
	(433,'Meh, pretty average','12/8/2017, 7:27:13 PM',1512786433437),
	(540,'Wonderful experience','12/8/2017, 7:24:50 PM',1512786290543),
	(576,'Some biology went down in here','12/8/2017, 7:36:54 PM',1512787014583),
	(607,'I had to climb way to many stairs to get here','12/8/2017, 7:36:00 PM',1512786960610),
	(615,'I engineered some stuff','12/8/2017, 7:43:16 PM',1512787396624),
	(757,'Super crowded, but pretty decent overall','12/8/2017, 7:35:27 PM',1512786927761),
	(963,'This Place has been closed for months!','12/8/2017, 7:28:34 PM',1512786514969);

/*!40000 ALTER TABLE `COMMENT` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table FEMALE
# ------------------------------------------------------------

DROP TABLE IF EXISTS `FEMALE`;

CREATE TABLE `FEMALE` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `feminine` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `female_id` FOREIGN KEY (`id`) REFERENCES `BATHROOM` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `FEMALE` WRITE;
/*!40000 ALTER TABLE `FEMALE` DISABLE KEYS */;

INSERT INTO `FEMALE` (`id`, `feminine`)
VALUES
	(57,0),
	(637,0),
	(747,1),
	(813,1),
	(881,1),
	(905,1);

/*!40000 ALTER TABLE `FEMALE` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table MALE
# ------------------------------------------------------------

DROP TABLE IF EXISTS `MALE`;

CREATE TABLE `MALE` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `urinals` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `bathroom_id` FOREIGN KEY (`id`) REFERENCES `BATHROOM` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `MALE` WRITE;
/*!40000 ALTER TABLE `MALE` DISABLE KEYS */;

INSERT INTO `MALE` (`id`, `urinals`)
VALUES
	(58,1),
	(361,0),
	(377,1),
	(420,1),
	(463,1),
	(630,1),
	(685,1),
	(859,0),
	(899,0),
	(937,1);

/*!40000 ALTER TABLE `MALE` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table RATING
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RATING`;

CREATE TABLE `RATING` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `bthrm_id` int(11) unsigned NOT NULL,
  `cleanliness` int(11) DEFAULT NULL,
  `wait_time` int(11) DEFAULT NULL,
  `user_approval` text,
  `overall` int(11) DEFAULT NULL,
  `smell` int(11) DEFAULT NULL,
  `privacy` int(11) DEFAULT NULL,
  `location` int(11) DEFAULT NULL,
  `maintanence` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bthrm_id` (`bthrm_id`),
  CONSTRAINT `bthrm_id` FOREIGN KEY (`bthrm_id`) REFERENCES `BATHROOM` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `RATING` WRITE;
/*!40000 ALTER TABLE `RATING` DISABLE KEYS */;

INSERT INTO `RATING` (`id`, `bthrm_id`, `cleanliness`, `wait_time`, `user_approval`, `overall`, `smell`, `privacy`, `location`, `maintanence`)
VALUES
	(17,463,2,4,'Mike',5,4,5,2,3),
	(58,899,1,1,'Tim',5,1,1,1,1),
	(104,57,2,2,'Pat',5,2,2,2,2),
	(126,937,2,2,'Sue',5,2,2,2,2),
	(146,905,1,1,'Guest',5,1,1,1,1),
	(290,630,5,5,'Sam',5,5,5,5,5),
	(299,813,3,4,'Tim',5,3,3,4,4),
	(302,905,5,5,'Guest',5,5,5,5,5),
	(326,905,4,4,'Guest',5,4,4,4,4),
	(331,58,1,1,'Bob',5,1,1,1,1),
	(428,637,5,5,'Jen',5,5,5,5,5),
	(433,377,3,3,'Bill',5,3,3,3,3),
	(540,361,5,5,'Susy',5,5,5,5,5),
	(576,859,5,5,'Ela',5,5,5,5,5),
	(607,747,4,4,'Brody',5,4,4,4,4),
	(615,881,2,2,'Mike',5,2,2,2,2),
	(757,685,3,3,'Tim',5,3,3,3,3),
	(963,420,1,1,'Pat',5,1,1,1,1);

/*!40000 ALTER TABLE `RATING` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table USER
# ------------------------------------------------------------

DROP TABLE IF EXISTS `USER`;

CREATE TABLE `USER` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` text,
  `password` text,
  `admin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;

INSERT INTO `USER` (`id`, `name`, `password`, `admin`)
VALUES
	(155,'Pat','123',0),
	(282,'Sue','123',0),
	(331,'Mike','123',0),
	(367,'Sam','123',1),
	(368,'Brody','123',1),
	(586,'Tim','123',1),
	(754,'Bob','123',0),
	(786,'Ela','123',0),
	(797,'Jen','123',0),
	(804,'Bill','123',0),
	(894,'Susy','123',0);

/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
