-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 02, 2022 at 10:36 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rest_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `founder_compt`
--

DROP TABLE IF EXISTS `founder_compt`;
CREATE TABLE IF NOT EXISTS `founder_compt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `founder_compt`
--

INSERT INTO `founder_compt` (`id`, `name`, `email`, `phone`, `position`, `address`) VALUES
(1, 'oumaima', 'oumaima@gmail.com', '23329714', 'ingenieur', 'nabeul');

-- --------------------------------------------------------

--
-- Table structure for table `investor_compt`
--

DROP TABLE IF EXISTS `investor_compt`;
CREATE TABLE IF NOT EXISTS `investor_compt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `investor_compt`
--

INSERT INTO `investor_compt` (`id`, `name`, `email`, `phone`, `position`, `address`) VALUES
(1, 'oumaima bouagina', 'oumaimabouagina@gmail.com', '23329714', 'ingenieur', 'nabeul'),
(2, 'mohsen_baraket', 'housnimoubarak@gmail.com', '0600999', 'bati5', 'charmchi5');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `typeObject` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `object` varchar(50) NOT NULL,
  `datestart` varchar(50) NOT NULL,
  `datefinish` varchar(45) NOT NULL,
  `catego` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `name`, `typeObject`, `description`, `object`, `datestart`, `datefinish`, `catego`) VALUES
(2, 'drone', 'donate', '0600999', 'bati5', 'charmchi5', 'charmchi5', ''),
(7, 'drone', 'donate', '0600999', 'bati5', 'charmchi5', 'charmchi5', ''),
(8, 'drone', 'donate', '0600999', 'bati5', 'charmchi5', 'charmchi5', 'games'),
(9, 'drone', '1144', '0600999', 'bati5', 'charmchi5', 'charmchi5', 'games');

-- --------------------------------------------------------

--
-- Table structure for table `user_compt`
--

DROP TABLE IF EXISTS `user_compt`;
CREATE TABLE IF NOT EXISTS `user_compt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `motdepass` varchar(150) NOT NULL,
  `tele` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_compt`
--

INSERT INTO `user_compt` (`id`, `name`, `prenom`, `email`, `motdepass`, `tele`) VALUES
(1, 'amine', 'gaaloul', 'gaaloulmedamine@outlook.fr', '485554aea', '22962000'),
(4, 'aaaaa4', 'gaaloul', 'gaaloulmedamine@outlook.fr', '485554aea', '22962000'),
(3, 'amine', 'gaaloul', 'gaaloulmedamine@outlook.fr', '485554aea', '22962000'),
(5, 'oumaima', 'bouagina', 'oumaimabouagina@outlook.fr', 'aaa4748++--', '22962000'),
(6, 'nkhla', 'najib', 'nkhalankhla@outlook.fr', 'behyaayyanh++--', '22962000'),
(7, 'nkhla', 'najib', 'nkhalankhla@outlook.fr', 'behyaayyanh++--', '22962000'),
(8, 'nkhla', 'najib', 'nkhalankhla@outlook.fr', 'behyaayyanh++--', '22962000'),
(9, 'tatata', 'tototo', 'nkhalankhla@outlook.fr', 'behyaayyanh++--', '22962000'),
(10, 'amine', 'yassin', 'yaasine@outlook.fr', '$2b$04$gsYPBZk5djfo/0sH4.g/SOiJnTjqKwBQfDqNkHUjfB2qo0kFD5pUa', '22962000'),
(11, 'oumaima', 'belhsen', 'aaee@outlook.fr', '$2b$04$E0c6MRtsjiq3b.cBw9HBQOI4o37pUXoq28bQealBXrrXmoQluLadK', '22962000'),
(15, 'tatata', 'tototo', 'aaabbb@outlook.fr', '$2b$04$NmTPxro1gRmT5RYYpNYhs.5CNrZeoecFf.JUh3nmupLjwM0qdN/dK', '22962000'),
(13, 'oumaima', 'belhsen', 'aaee@outlook.fr', '$2b$04$Gg7oX3SbWuMzpvNFMAZ8H.VmhwOmxHtXRGgCdmRN.oIl.xN6e4YB6', '22962000'),
(14, 'akakak', 'aeaeae', 'qssss@outlook.fr', '123++--', '2554455');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
