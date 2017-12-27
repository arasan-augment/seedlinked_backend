-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2017 at 07:08 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seedlinked_backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `ma_bio_region`
--

CREATE TABLE `ma_bio_region` (
  `br_id` int(11) NOT NULL,
  `br_user_id` int(11) NOT NULL,
  `br_region_name` varchar(100) NOT NULL,
  `br_region_location_name` text NOT NULL,
  `br_loc_lat` varchar(150) NOT NULL,
  `br_loc_lng` varchar(150) NOT NULL,
  `br_upload_id` text NOT NULL,
  `br_created_at` datetime NOT NULL,
  `br_status` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ma_bio_region`
--

INSERT INTO `ma_bio_region` (`br_id`, `br_user_id`, `br_region_name`, `br_region_location_name`, `br_loc_lat`, `br_loc_lng`, `br_upload_id`, `br_created_at`, `br_status`) VALUES
(1, 3, 'vbn', 'v', '53.90726189999999', '-122.75519129999998', '1855', '2017-11-18 11:27:28', 1),
(2, 3, 'Test', 'Coimbatore-Ooty-Gundlupet Hwy, India', '11.4069393', '76.71459249999998', '4228', '2017-11-18 11:31:57', 1),
(3, 3, 'Test', 'Coimbatore-Ooty-Gundlupet Hwy, India', '11.4069393', '76.71459249999998', '4228', '2017-11-18 11:31:57', 1),
(4, 3, 'Test region', 'State Hwy N, Middle Brook, MO 63656, USA', '37.599699166466145', '-90.8011796875', '6989', '2017-11-18 11:34:39', 1),
(5, 3, 'Gopal', 'Erode-Chennimalai Rd, Anna Nagar, SIDCO Industrial Estate, Jaganathapuram Colony, Erode, Tamil Nadu 638001, India', '11.3270788', '77.7203217', '3750', '2017-11-18 11:56:25', 1),
(6, 3, 'Good', 'Eros Rd, Pretoria, South Africa', '-25.799948', '28.326013999999986', '7698', '2017-11-18 11:57:28', 1),
(7, 3, 'Yesy', 'Bangalore Nilgiri Rd, Lashkar Mohalla, Doora, Mysuru, Karnataka, India', '12.3116987', '76.65876509999998', '6286', '2017-11-18 11:59:16', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ma_seed_files`
--

CREATE TABLE `ma_seed_files` (
  `sf_id` int(11) NOT NULL,
  `sf_about_file` text NOT NULL,
  `sf_file_name` text NOT NULL,
  `sf_file_url` text NOT NULL,
  `sf_upload_id` text NOT NULL,
  `sf_upload_by` int(11) NOT NULL,
  `sf_upload_date` datetime NOT NULL,
  `sf_status` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ma_seed_files`
--

INSERT INTO `ma_seed_files` (`sf_id`, `sf_about_file`, `sf_file_name`, `sf_file_url`, `sf_upload_id`, `sf_upload_by`, `sf_upload_date`, `sf_status`) VALUES
(1, 'Album test1', 'company_3_1100.jpg', 'uploads/company_3_1100.jpg', '1100', 3, '2017-11-10 18:14:27', 1),
(2, 'Album test1', 'england_3_1100.jpg', 'uploads/england_3_1100.jpg', '1100', 3, '2017-11-10 18:14:27', 1),
(3, 'Album test1', 'france_3_1100.jpg', 'uploads/france_3_1100.jpg', '1100', 3, '2017-11-10 18:14:27', 1),
(4, 'Test', 'fileupload_3_6046.png', 'uploads/fileupload_3_6046.png', '6046', 3, '2017-11-14 12:00:19', 1),
(5, 'hi', 'france_3_7740.jpg', 'uploads/france_3_7740.jpg', '7740', 3, '2017-11-17 15:47:35', 1),
(6, 'hello', 'images_3_7750.png', 'uploads/images_3_7750.png', '7750', 3, '2017-11-17 15:48:31', 1),
(7, 'vbn', 'france_3_1855.jpg', 'uploads/france_3_1855.jpg', '1855', 3, '2017-11-18 11:27:28', 1),
(8, 'Test', 'nature1_3_4228.jpg', 'uploads/nature1_3_4228.jpg', '4228', 3, '2017-11-18 11:31:57', 1),
(9, 'Test', 'nature2_3_4228.jpg', 'uploads/nature2_3_4228.jpg', '4228', 3, '2017-11-18 11:31:57', 1),
(10, 'Test region', 'natureandoutside1_3_6989.jpg', 'uploads/natureandoutside1_3_6989.jpg', '6989', 3, '2017-11-18 11:34:39', 1),
(11, 'Test region', 'natureandoutside2_3_6989.jpg', 'uploads/natureandoutside2_3_6989.jpg', '6989', 3, '2017-11-18 11:34:39', 1),
(12, 'Gopal', 'nature1_3_3750.jpg', 'uploads/nature1_3_3750.jpg', '3750', 3, '2017-11-18 11:56:25', 1),
(13, 'Gopal', 'nature2_3_3750.jpg', 'uploads/nature2_3_3750.jpg', '3750', 3, '2017-11-18 11:56:25', 1),
(14, 'Gopal', 'natureandoutside1_3_3750.jpg', 'uploads/natureandoutside1_3_3750.jpg', '3750', 3, '2017-11-18 11:56:25', 1),
(15, 'Gopal', 'natureandoutside2_3_3750.jpg', 'uploads/natureandoutside2_3_3750.jpg', '3750', 3, '2017-11-18 11:56:25', 1),
(16, 'Good', 'java-developer_3_7698.jpg', 'uploads/java-developer_3_7698.jpg', '7698', 3, '2017-11-18 11:57:28', 1),
(17, 'Yesy', 'images_3_6286.png', 'uploads/images_3_6286.png', '6286', 3, '2017-11-18 11:59:16', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sl_master_privacies`
--

CREATE TABLE `sl_master_privacies` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sl_master_privacies`
--

INSERT INTO `sl_master_privacies` (`id`, `name`, `created`, `modified`, `status`) VALUES
(1, 'Share my data with everyone', '2017-12-26 17:00:25', '2017-12-26 17:00:25', 1),
(2, 'Friends', '2017-12-26 17:00:50', '2017-12-26 17:00:50', 1),
(3, 'No one', '2017-12-26 17:02:12', '2017-12-26 17:02:12', 1),
(4, 'Share my review', '2017-12-26 17:02:45', '2017-12-26 17:02:45', 1),
(5, 'Appear as anonymous on review', '2017-12-26 17:04:33', '2017-12-26 17:04:33', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sl_master_ratings`
--

CREATE TABLE `sl_master_ratings` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sl_master_ratings`
--

INSERT INTO `sl_master_ratings` (`id`, `name`, `created`, `modified`, `status`) VALUES
(1, 'Disease', '2017-12-26 17:07:33', '2017-12-26 17:07:33', 1),
(2, 'Vigor', '2017-12-26 17:07:52', '2017-12-26 17:07:52', 1),
(3, 'Yield', '2017-12-26 17:08:23', '2017-12-26 17:08:23', 1),
(4, 'Flavor', '2017-12-26 17:08:48', '2017-12-26 17:08:48', 1),
(5, 'Germination', '2017-12-26 17:10:11', '2017-12-26 17:10:11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sl_master_varieties`
--

CREATE TABLE `sl_master_varieties` (
  `id` bigint(20) NOT NULL,
  `name` varchar(256) NOT NULL,
  `created_by` bigint(20) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sl_users`
--

CREATE TABLE `sl_users` (
  `id` bigint(20) NOT NULL,
  `user_role_id` bigint(20) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `address` varchar(256) NOT NULL,
  `description` text NOT NULL,
  `avatar` text NOT NULL,
  `acreage` varchar(100) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='admin''s added user details';

--
-- Dumping data for table `sl_users`
--

INSERT INTO `sl_users` (`id`, `user_role_id`, `firstname`, `lastname`, `email`, `password`, `address`, `description`, `avatar`, `acreage`, `created`, `modified`, `status`) VALUES
(1, 1, 'Arasan', 'SL', 'arasan@goaugment.io', 'MWnSJJ70J/8p5QVj31yf16rKH0iEzylv1Y7Zhm75oIM=', 'Los Angels', 'Suscipit hic sed magnam necessitatibus vel', '', '', '2017-12-22 22:47:46', '2017-12-22 22:47:46', 1),
(10, 2, 'Alfonso', 'Quinn', 'zofexino@goaugment.io', 'xEoazWMW991HyBi/cknapWMWuRHDsUVOKzhEuHCktmA=', 'Repellendus Est labore quo nesciunt dolorum exercitationem rerum deserunt accusamus voluptatem elit natus dolore culpa non repellendus Sint architecto', '', '', '', '2017-12-27 16:44:14', '2017-12-27 16:44:14', 1),
(12, 3, 'Alvin', 'Tanner', 'pucimytam@goaugment.io', 'zRpSkZTF9odAVqPMIfrxGZqERThKs5kPhr1bPa3cz0U=', 'Autem ', 'Quis rerum eu facere accusantium dignissimos et dolore consequat Perferendis voluptatibus in tenetur impedit autem', '', '', '2017-12-27 16:59:11', '2017-12-27 16:59:11', 1),
(13, 2, 'Kylan', 'Mays', 'deziwa@goaugment.io', 'sWKPGhNZJ/XBY1M52ZvH6VNmu7TXeFLGwy+UZfT5sHM=', 'Distinctio Eiusmod debitis culpa quas distinctio Iste ut', 'Quia perspiciatis exercitation dolorem voluptas non inventore dolores mollit pariatur', '', 'Aliquam aut officia voluptatum cupiditate dolor ducimus culpa eligendi ex corporis vel aliqua Eius u', '2017-12-27 17:10:24', '2017-12-27 17:10:24', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sl_user_ratings`
--

CREATE TABLE `sl_user_ratings` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `variety_id` bigint(20) NOT NULL,
  `rating_id` int(11) NOT NULL,
  `rating` tinyint(1) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sl_user_reviews`
--

CREATE TABLE `sl_user_reviews` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `variety_id` bigint(20) NOT NULL,
  `rating` decimal(10,1) NOT NULL,
  `review` text NOT NULL,
  `is_like` tinyint(1) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sl_user_roles`
--

CREATE TABLE `sl_user_roles` (
  `id` bigint(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `roles` text NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='user roles here';

--
-- Dumping data for table `sl_user_roles`
--

INSERT INTO `sl_user_roles` (`id`, `name`, `roles`, `created`, `modified`, `status`) VALUES
(1, 'Admin', 'a:11:{i:0;s:9:"dashboard";i:1;s:10:"seedsearch";i:2;s:6:"myfarm";i:3;s:5:"users";i:4;s:13:"my-bio-region";i:5;s:7:"profile";i:6;s:7:"my-farm";i:7;s:6:"review";i:8;s:12:"my-community";i:9;s:11:"seed-search";i:10;s:8:"my-seeds";}', '2017-12-26 19:02:44', '2017-12-26 19:02:44', 1),
(2, 'Gardener/Farmer', 'a:5:{i:0;s:9:"dashboard";i:1;s:7:"my-farm";i:2;s:7:"profile";i:3;s:6:"review";i:4;s:11:"seed-search";}', '2017-12-26 19:03:41', '2017-12-26 19:03:41', 1),
(3, 'Breeder/Seed Grower', 'a:4:{i:0;s:9:"dashboard";i:1;s:13:"my-bio-region";i:2;s:7:"profile";i:3;s:8:"my-seeds";}', '2017-12-26 22:29:33', '2017-12-26 22:29:33', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sl_user_role_menus`
--

CREATE TABLE `sl_user_role_menus` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `router_link` varchar(256) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sl_user_role_menus`
--

INSERT INTO `sl_user_role_menus` (`id`, `name`, `router_link`, `created`, `modified`, `status`) VALUES
(1, 'Dashboard', 'dashboard', '2017-12-26 20:05:09', '2017-12-26 20:05:09', 1),
(2, 'Users', 'users', '2017-12-26 21:18:26', '2017-12-26 21:18:26', 1),
(3, 'My Bioregion', 'my-bio-region', '2017-12-26 21:18:55', '2017-12-26 21:18:55', 1),
(4, 'My Profile', 'profile', '2017-12-27 15:03:08', '2017-12-27 15:03:08', 1),
(5, 'My Farm/Garden', 'my-farm', '2017-12-27 15:03:26', '2017-12-27 15:03:26', 1),
(6, 'My Community', 'my-community', '2017-12-27 15:51:14', '2017-12-27 15:51:14', 1),
(7, 'Review', 'review', '2017-12-27 15:51:25', '2017-12-27 15:51:25', 1),
(8, 'Seed Search', 'seed-search', '2017-12-27 15:51:34', '2017-12-27 15:51:34', 1),
(9, 'My Seeds', 'my-seeds', '2017-12-27 15:51:49', '2017-12-27 15:51:49', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sl_user_settings`
--

CREATE TABLE `sl_user_settings` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `is_climmob` tinyint(1) NOT NULL,
  `is_email_notify` tinyint(1) NOT NULL,
  `is_phone_notify` tinyint(1) NOT NULL,
  `is_new_suggestions_notify` tinyint(1) NOT NULL,
  `is_review_submit_notify` tinyint(1) NOT NULL,
  `is_social_media_notify` tinyint(1) NOT NULL,
  `is_text_notify` tinyint(1) NOT NULL,
  `privacy_setting_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sl_user_varieties`
--

CREATE TABLE `sl_user_varieties` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `variety_id` bigint(20) NOT NULL,
  `planting_date` date NOT NULL,
  `flowering_date` date NOT NULL,
  `first_harvest_date` date NOT NULL,
  `last_harvest_date` date NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sl_vareity_images`
--

CREATE TABLE `sl_vareity_images` (
  `id` bigint(20) NOT NULL,
  `vareity_id` bigint(20) NOT NULL,
  `image` text NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ma_bio_region`
--
ALTER TABLE `ma_bio_region`
  ADD PRIMARY KEY (`br_id`);

--
-- Indexes for table `ma_seed_files`
--
ALTER TABLE `ma_seed_files`
  ADD PRIMARY KEY (`sf_id`);

--
-- Indexes for table `sl_master_privacies`
--
ALTER TABLE `sl_master_privacies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sl_master_ratings`
--
ALTER TABLE `sl_master_ratings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sl_master_varieties`
--
ALTER TABLE `sl_master_varieties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sl_users`
--
ALTER TABLE `sl_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sl_user_ratings`
--
ALTER TABLE `sl_user_ratings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sl_user_reviews`
--
ALTER TABLE `sl_user_reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sl_user_roles`
--
ALTER TABLE `sl_user_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sl_user_role_menus`
--
ALTER TABLE `sl_user_role_menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sl_user_settings`
--
ALTER TABLE `sl_user_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sl_user_varieties`
--
ALTER TABLE `sl_user_varieties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sl_vareity_images`
--
ALTER TABLE `sl_vareity_images`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ma_bio_region`
--
ALTER TABLE `ma_bio_region`
  MODIFY `br_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `ma_seed_files`
--
ALTER TABLE `ma_seed_files`
  MODIFY `sf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `sl_master_privacies`
--
ALTER TABLE `sl_master_privacies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `sl_master_ratings`
--
ALTER TABLE `sl_master_ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `sl_master_varieties`
--
ALTER TABLE `sl_master_varieties`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sl_users`
--
ALTER TABLE `sl_users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `sl_user_ratings`
--
ALTER TABLE `sl_user_ratings`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sl_user_reviews`
--
ALTER TABLE `sl_user_reviews`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sl_user_roles`
--
ALTER TABLE `sl_user_roles`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `sl_user_role_menus`
--
ALTER TABLE `sl_user_role_menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `sl_user_settings`
--
ALTER TABLE `sl_user_settings`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sl_user_varieties`
--
ALTER TABLE `sl_user_varieties`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sl_vareity_images`
--
ALTER TABLE `sl_vareity_images`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
