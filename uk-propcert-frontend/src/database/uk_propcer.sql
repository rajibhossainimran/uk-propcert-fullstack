-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2025 at 11:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uk_propcert`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment_details`
--

CREATE TABLE `appointment_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `booking_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `property_address` text NOT NULL,
  `property_details` text NOT NULL,
  `date` date NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `certifier` varchar(255) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `order_status` varchar(255) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `appointment_details`
--

INSERT INTO `appointment_details` (`id`, `user_id`, `booking_id`, `name`, `email`, `phone`, `property_address`, `property_details`, `date`, `total_price`, `certifier`, `payment_status`, `created_at`, `updated_at`, `order_status`) VALUES
(9, 3, '4439913', 'Imran Hossain', 'imran@gmail.com', '0136665665', 'Dhanmondi 27', 'Property is any item that a person or a business has legal title over. Property can be tangible items, such as houses, cars, or appliances,', '2025-03-14', 100.00, NULL, 'pending', '2025-03-05 21:18:55', '2025-03-05 21:18:55', 'pending'),
(10, 3, '9391617', 'Imran Hossain', 'imran@gmail.com', '0136665665', 'Shewrapara Mirpur Dhaka-1216', 'Property is any item that a person or a business has legal title over. Property can be tangible items, such as houses, cars, or appliances,', '2025-03-10', 400.00, NULL, 'pending', '2025-03-08 03:16:42', '2025-03-08 03:16:42', 'pending'),
(11, 8, '7813728', 'Rukaiya', 'rukaiya@gmail.com', '014514', 'Shewrapara Mirpur Dhaka-1216', 'Property is any item that a person or a business has legal title over. Property can be tangible items, such as houses, cars, or appliances,', '2025-03-15', 250.00, '4', 'pending', '2025-03-12 04:09:28', '2025-03-13 00:24:07', 'completed');

-- --------------------------------------------------------

--
-- Table structure for table `appointment_services`
--

CREATE TABLE `appointment_services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `booking_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL,
  `certifier` varchar(255) DEFAULT NULL,
  `certificate_img` varchar(255) DEFAULT NULL,
  `submit_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `issued` date DEFAULT NULL,
  `expire` date DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `order_status` varchar(255) NOT NULL DEFAULT 'pending',
  `certificate` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `appointment_services`
--

INSERT INTO `appointment_services` (`id`, `booking_id`, `name`, `description`, `price`, `service_id`, `certifier`, `certificate_img`, `submit_date`, `created_at`, `updated_at`, `issued`, `expire`, `status`, `order_status`, `certificate`) VALUES
(13, 4439913, 'Portable Appliance Testing (PAT) for your property', 'PAT or Portable Appliance Testing is performed to ensure the safety of each appliance in a business or workplace. Employers and landlords have a duty to maintain safety in these spaces.\n\nPAT Testing makes sure appliances and electrical equipment are work properly and are not safety risks to their surroundings.\n\nIf you need testing done on your appliances, PropCert’s team of well trained electricians has worked with a wide variety of manufacturers and can give you reliable results and recommendations.', 100.00, 14, '4', 'https://img.freepik.com/premium-vector/green-color-certificate-design-template_987701-270.jpg', '2025-03-20', '2025-03-05 21:18:55', '2025-03-05 21:21:08', '2025-03-06', '2026-07-15', 'completed', 'completed', NULL),
(14, 9391617, 'Get a Domestic EPC for your property', 'An Energy Performance Certificate, or EPC, is a legal requirement for property owners looking to let or sell their properties.\n\nIf you need a domestic EPC, we have assessors nationwide ready to inspect and assess your property. We pride ourselves on providing you with a fast, friendly and professional service.', 300.00, 12, NULL, NULL, NULL, '2025-03-08 03:16:42', '2025-03-08 03:16:42', NULL, NULL, 'pending', 'pending', NULL),
(15, 9391617, 'Portable Appliance Testing (PAT) for your property', 'PAT or Portable Appliance Testing is performed to ensure the safety of each appliance in a business or workplace. Employers and landlords have a duty to maintain safety in these spaces.\n\nPAT Testing makes sure appliances and electrical equipment are work properly and are not safety risks to their surroundings.\n\nIf you need testing done on your appliances, PropCert’s team of well trained electricians has worked with a wide variety of manufacturers and can give you reliable results and recommendations.', 100.00, 14, NULL, NULL, NULL, '2025-03-08 03:16:42', '2025-03-08 03:16:42', NULL, NULL, 'pending', 'pending', NULL),
(16, 7813728, 'High quality boiler servicing', 'Regular boiler servicing is essential to ensuring your boiler is running safely and efficiently.\n\nDuring a boiler service, an engineer will visit your property and perform a series of safety and efficiency checks on your central heating system.', 250.00, 2, '4', 'https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg', '2025-03-13', '2025-03-12 04:09:29', '2025-03-13 00:22:37', '2025-03-13', '2027-07-15', 'completed', 'completed', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000001_create_cache_table', 1),
(2, '0001_01_01_000002_create_jobs_table', 1),
(3, '2025_02_25_035938_create_users_table', 1),
(4, '2025_02_25_040521_create_personal_access_tokens_table', 1),
(5, '2025_02_26_160654_create_service_categories_table', 2),
(6, '2025_02_26_161219_create_services_table', 3),
(9, '2025_03_01_185012_create_appointment_details_table', 4),
(10, '2025_03_01_185122_create_appointment_services_table', 4),
(11, '2025_03_03_184206_add_payment_status_to_appointment_details', 5),
(12, '2025_03_04_171126_add_fields_to_appointment_services', 6),
(13, '2025_03_05_063032_add_certifier_to_appointment_details', 7),
(14, '2025_03_05_193628_add_certificate_img_and_submit_date_to_appointment_services', 8);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', 'ba0381c246cfe59ea30d6f587633d579f743486d9d6857caa6889a9e7af13e55', '[\"*\"]', NULL, NULL, '2025-02-25 04:02:26', '2025-02-25 04:02:26'),
(2, 'App\\Models\\User', 1, 'auth_token', '04244e85b30fe204472efd3f0f693b8d247aa15c9ad5a4738b8a74f76585d29d', '[\"*\"]', NULL, NULL, '2025-02-25 04:24:05', '2025-02-25 04:24:05'),
(3, 'App\\Models\\User', 1, 'auth_token', '07289f7dec38baaca3486ce97ae6b8342cdf4b05fd81bf53f253c99e4a9d4d0b', '[\"*\"]', NULL, NULL, '2025-02-25 04:40:16', '2025-02-25 04:40:16'),
(4, 'App\\Models\\User', 1, 'auth_token', '6779b4a42e91db362f80688b1bd997ec5a37f54a959a8fb65b9af84d3450dcde', '[\"*\"]', NULL, NULL, '2025-02-25 04:41:51', '2025-02-25 04:41:51'),
(5, 'App\\Models\\User', 1, 'auth_token', 'e92e2f60d78c5aaab1e6814a46ac7110faa321365ab3f1ba0355964ed87992ca', '[\"*\"]', NULL, NULL, '2025-02-25 05:01:19', '2025-02-25 05:01:19'),
(6, 'App\\Models\\User', 3, 'auth_token', '348dfedd482b762b3bfbbab345ccfb83d0b27608ea065bac15c178ae818289d9', '[\"*\"]', NULL, NULL, '2025-02-25 06:12:11', '2025-02-25 06:12:11'),
(7, 'App\\Models\\User', 1, 'auth_token', '2ca88e3b0299e42a4d9845b25dd075aa25e0eac7c13ec31fea0dc7328b48aa32', '[\"*\"]', NULL, NULL, '2025-02-25 06:31:22', '2025-02-25 06:31:22'),
(8, 'App\\Models\\User', 1, 'auth_token', '2604a1efb5df1a2a924887e9397dfe9cf59db78fd7bf0509ffb316f6e2df4b5a', '[\"*\"]', NULL, NULL, '2025-02-25 06:32:56', '2025-02-25 06:32:56'),
(9, 'App\\Models\\User', 3, 'auth_token', 'c093476ea963b0dffe8af5d689fe38ae807d13715254b0eb8222a7fcc7474b3b', '[\"*\"]', NULL, NULL, '2025-02-25 06:37:23', '2025-02-25 06:37:23'),
(10, 'App\\Models\\User', 3, 'auth_token', '82a5316ff4e91ff8ddab2e6b2f4ed1ce88e3a9effa4e034b386d18fc34966f6f', '[\"*\"]', NULL, NULL, '2025-02-25 06:43:12', '2025-02-25 06:43:12'),
(11, 'App\\Models\\User', 1, 'auth_token', '3ee258f2b86b289cabbe5ee568853abb11e3710f471f9a274dcce3ef2254af34', '[\"*\"]', NULL, NULL, '2025-02-25 07:13:38', '2025-02-25 07:13:38'),
(12, 'App\\Models\\User', 1, 'auth_token', '2de4dfdf964559fb72d40f86f9d17c35bb61828a5a74ee0f78e6e1b47cafe0f2', '[\"*\"]', NULL, NULL, '2025-02-25 07:25:25', '2025-02-25 07:25:25'),
(13, 'App\\Models\\User', 1, 'auth_token', '9bd7d700e0b2058ea5498cca09c19fbafbaf5e8a22680b5dbd26529b1f290855', '[\"*\"]', NULL, NULL, '2025-02-25 07:31:56', '2025-02-25 07:31:56'),
(14, 'App\\Models\\User', 3, 'auth_token', 'c6f68d000b57576711297747919ad923de0b5f6c6384483a59328dd52972f610', '[\"*\"]', NULL, NULL, '2025-02-25 12:14:29', '2025-02-25 12:14:29'),
(15, 'App\\Models\\User', 3, 'auth_token', '9262c4159761c0f17aa62960d9c98c818864cedc306fe08ff2b470aec26d8b73', '[\"*\"]', NULL, NULL, '2025-02-25 12:26:28', '2025-02-25 12:26:28'),
(16, 'App\\Models\\User', 3, 'auth_token', 'c388127cfeeea11504b020df562fdb0bf6a1774d520585d762aa63ef3f9b6e6f', '[\"*\"]', NULL, NULL, '2025-02-25 12:27:25', '2025-02-25 12:27:25'),
(17, 'App\\Models\\User', 3, 'auth_token', '7e0ff4a1b8952b40a5e2f1eeae59d23311c6d33f20d7e2bbb0a368dff406c056', '[\"*\"]', NULL, NULL, '2025-02-25 12:59:55', '2025-02-25 12:59:55'),
(18, 'App\\Models\\User', 3, 'auth_token', '3ce764c3415d5125c9ce40b86c4f96ce4179e82aae846dbdba37d2b4c74cdd3c', '[\"*\"]', NULL, NULL, '2025-02-25 13:14:28', '2025-02-25 13:14:28'),
(19, 'App\\Models\\User', 3, 'auth_token', '123eb4bc0e2db0a221f430aca1017673bc20bb1add160cb873a0ba99914a4f2f', '[\"*\"]', NULL, NULL, '2025-02-25 13:21:33', '2025-02-25 13:21:33'),
(20, 'App\\Models\\User', 4, 'auth_token', 'b0660a02847ce979b138b62b5468870cb53301e36fb183eb3f7e4cb4c15de338', '[\"*\"]', NULL, NULL, '2025-02-25 13:22:24', '2025-02-25 13:22:24'),
(21, 'App\\Models\\User', 4, 'auth_token', '716ef199db9ce3605de5af2e08f93ce28c33a69a41817247ec6fa190bfa0c134', '[\"*\"]', NULL, NULL, '2025-02-25 13:22:48', '2025-02-25 13:22:48'),
(22, 'App\\Models\\User', 3, 'auth_token', 'c9575676c8d8c244e69347f4599e0b50d48b327fcc661249ca274d984ceacd8c', '[\"*\"]', NULL, NULL, '2025-02-25 13:26:53', '2025-02-25 13:26:53'),
(23, 'App\\Models\\User', 3, 'auth_token', '598db69d04a6ffbf14c0a9fd7176423dce07ea83fb8afd0f1157446bca85c45c', '[\"*\"]', NULL, NULL, '2025-02-25 13:37:29', '2025-02-25 13:37:29'),
(24, 'App\\Models\\User', 3, 'auth_token', 'bf3e77c418b26566529894584087177f12f7cb74617aec657c67def9668900c8', '[\"*\"]', NULL, NULL, '2025-02-25 13:40:21', '2025-02-25 13:40:21'),
(25, 'App\\Models\\User', 3, 'auth_token', '0a464f4870d04590dfe8a274a7c6bd7092290477e147d3cf39d02903a855d2cf', '[\"*\"]', NULL, NULL, '2025-02-26 07:17:18', '2025-02-26 07:17:18'),
(26, 'App\\Models\\User', 3, 'auth_token', '597ac4744ebab574c8589fcf0c93aab5c1a40cc5231536884a88798e9d056035', '[\"*\"]', NULL, NULL, '2025-02-26 07:18:40', '2025-02-26 07:18:40'),
(27, 'App\\Models\\User', 4, 'auth_token', '8f171956f9addd54e27df4053577327543325e66bac9f2fbafdc92c7ca969743', '[\"*\"]', NULL, NULL, '2025-02-26 07:19:12', '2025-02-26 07:19:12'),
(28, 'App\\Models\\User', 4, 'auth_token', '2cbf5bfd0a2bd61770984dc7b31ae85ff478f605dd0e6e1f5060d4e4289a2780', '[\"*\"]', NULL, NULL, '2025-02-26 10:39:53', '2025-02-26 10:39:53'),
(29, 'App\\Models\\User', 4, 'auth_token', '273a39aed8a596b44d509f4983057fcde232d525836487ba994551fdbc817181', '[\"*\"]', NULL, NULL, '2025-02-26 13:34:17', '2025-02-26 13:34:17'),
(30, 'App\\Models\\User', 3, 'auth_token', '5bce3d8db57b7afdf9a33b6e39d974098eb863cb2f90e9557987b1ee0dc201b8', '[\"*\"]', NULL, NULL, '2025-02-27 10:24:31', '2025-02-27 10:24:31'),
(31, 'App\\Models\\User', 3, 'auth_token', 'da7fb2e09741e27d3d168dc98dc6b4ea6b8d8140508896bee16de6529ac0c036', '[\"*\"]', NULL, NULL, '2025-02-27 10:55:43', '2025-02-27 10:55:43'),
(32, 'App\\Models\\User', 4, 'auth_token', '93f77615ee5c49632500a6a6c9b3f5dd4e1856608ecf07f5e80397805a0e27df', '[\"*\"]', NULL, NULL, '2025-02-27 11:10:15', '2025-02-27 11:10:15'),
(33, 'App\\Models\\User', 4, 'auth_token', '300ae6149a56a1570d22ed58d19c653ea9df0445ded4dacb58425299ef4ec2a7', '[\"*\"]', NULL, NULL, '2025-02-27 23:55:46', '2025-02-27 23:55:46'),
(34, 'App\\Models\\User', 3, 'auth_token', '141b1bcb06595fd3535bcd27189403e851ebb07a00d53ad00915c88b7fd4c93b', '[\"*\"]', NULL, NULL, '2025-03-01 14:35:57', '2025-03-01 14:35:57'),
(35, 'App\\Models\\User', 3, 'auth_token', '508a4993838d85d95ebdca480543a1cc835d2d9a96da6737feed5d837b8e0e5b', '[\"*\"]', NULL, NULL, '2025-03-02 06:54:08', '2025-03-02 06:54:08'),
(36, 'App\\Models\\User', 3, 'auth_token', 'b69aa747ed8e2e96910457bd8e40fd09773f61c3503c90de19132100c89f7ed4', '[\"*\"]', NULL, NULL, '2025-03-03 00:01:29', '2025-03-03 00:01:29'),
(37, 'App\\Models\\User', 1, 'auth_token', '80b6e59fe1f242609a6ccacd8132a5b56d9eb34c757598bb38c145d6efa0c15f', '[\"*\"]', NULL, NULL, '2025-03-03 12:47:34', '2025-03-03 12:47:34'),
(38, 'App\\Models\\User', 1, 'auth_token', '7b38d8226d37f2250102dbcd6ff49dd64ed40117b951645b58ecbf567820e0f6', '[\"*\"]', NULL, NULL, '2025-03-03 14:44:25', '2025-03-03 14:44:25'),
(39, 'App\\Models\\User', 1, 'auth_token', 'bfd312b80571074814f27d6e92e24cc3d8f44b4ebe031159900698c1821444b1', '[\"*\"]', NULL, NULL, '2025-03-03 14:45:25', '2025-03-03 14:45:25'),
(40, 'App\\Models\\User', 1, 'auth_token', 'd280cd5d19f909beabebf40141b651303b1fa5e975b704abde29d7834cde3d77', '[\"*\"]', NULL, NULL, '2025-03-03 14:46:33', '2025-03-03 14:46:33'),
(41, 'App\\Models\\User', 4, 'auth_token', '2200c4d04d0eb32ba6a68008dab923761b6ecd5dd7ca4048626df6a266d982ca', '[\"*\"]', NULL, NULL, '2025-03-03 15:54:58', '2025-03-03 15:54:58'),
(42, 'App\\Models\\User', 4, 'auth_token', '56ce07447925ab92f499efc48039509701bd4e3b39688876917f282a21f9231f', '[\"*\"]', NULL, NULL, '2025-03-03 15:56:42', '2025-03-03 15:56:42'),
(43, 'App\\Models\\User', 4, 'auth_token', '5e9030eaac7c6b07e945a47ddbb38189db35046129e0735667d03aac54d5cd46', '[\"*\"]', NULL, NULL, '2025-03-03 16:01:46', '2025-03-03 16:01:46'),
(44, 'App\\Models\\User', 3, 'auth_token', '2d13d524a8f0ac6293134eface84ee8cf33a067de53949d736455879baa9c71b', '[\"*\"]', NULL, NULL, '2025-03-03 16:12:28', '2025-03-03 16:12:28'),
(45, 'App\\Models\\User', 3, 'auth_token', '99ce70dec9be85e15d3b4e4d6d52f74bce8102892b5eaa931b20c6079ef07918', '[\"*\"]', NULL, NULL, '2025-03-04 02:24:55', '2025-03-04 02:24:55'),
(46, 'App\\Models\\User', 4, 'auth_token', '4b66dcfd47503c3dfb67a225ddcdf29748cc35a2f8a413ecd5b8173462919324', '[\"*\"]', NULL, NULL, '2025-03-04 02:27:28', '2025-03-04 02:27:28'),
(47, 'App\\Models\\User', 6, 'auth_token', '90b8b5362fe2a152f13970151202b60004277baae8a8e64c269e2f95f942443d', '[\"*\"]', NULL, NULL, '2025-03-04 02:35:27', '2025-03-04 02:35:27'),
(48, 'App\\Models\\User', 6, 'auth_token', 'eec6845e72157ce73bd54bd04cd4892fb9aeba82b039d0c50ac284204a2b0840', '[\"*\"]', NULL, NULL, '2025-03-04 02:35:48', '2025-03-04 02:35:48'),
(49, 'App\\Models\\User', 6, 'auth_token', '9c1f5cb388bd1b96c3ac48d17d82046a798294acf05b53fbe28765e0ff61d2c4', '[\"*\"]', NULL, NULL, '2025-03-04 02:37:07', '2025-03-04 02:37:07'),
(50, 'App\\Models\\User', 6, 'auth_token', '712e101c0f2b5d7ccaa54ea8431f452cf07b1c8c236558ac9bc1aa20dde132e8', '[\"*\"]', NULL, NULL, '2025-03-04 02:42:41', '2025-03-04 02:42:41'),
(51, 'App\\Models\\User', 6, 'auth_token', 'ce18cdd02a7ec03078324e0f38e3cf7c25cec417e4d0a09af094c96ad78e5e75', '[\"*\"]', NULL, NULL, '2025-03-04 02:43:40', '2025-03-04 02:43:40'),
(52, 'App\\Models\\User', 6, 'auth_token', '7a027a225928f67e54744f855fd0fa9faab2de53e113415fa735663fd1b1057a', '[\"*\"]', NULL, NULL, '2025-03-04 03:03:41', '2025-03-04 03:03:41'),
(53, 'App\\Models\\User', 6, 'auth_token', '4de02f6418fdb67eae7cb1f84d6a7aa8429122500634c7dd29110a40b4e182a6', '[\"*\"]', NULL, NULL, '2025-03-04 03:08:40', '2025-03-04 03:08:40'),
(54, 'App\\Models\\User', 3, 'auth_token', '1ee1e934893a046fa721161444b2a7f178d206e4ec687b5aeb909c3519e70ac4', '[\"*\"]', NULL, NULL, '2025-03-04 03:29:32', '2025-03-04 03:29:32'),
(55, 'App\\Models\\User', 4, 'auth_token', '670e1c6f06a19d71a1b165569902274c3541fef661e37b7ba31f3cb6786a44cd', '[\"*\"]', NULL, NULL, '2025-03-04 03:34:01', '2025-03-04 03:34:01'),
(56, 'App\\Models\\User', 3, 'auth_token', '5f0f2f32a75e5f93ca84eab02c3e23cafed1ddcb6ef8b1f8c067b8c345e63363', '[\"*\"]', NULL, NULL, '2025-03-04 03:40:48', '2025-03-04 03:40:48'),
(57, 'App\\Models\\User', 3, 'auth_token', '9f042f150c29c04a7a0cd9f07a7a09feca738ef5b5a663a0ce30e8c64b2e09dc', '[\"*\"]', NULL, NULL, '2025-03-04 05:21:12', '2025-03-04 05:21:12'),
(58, 'App\\Models\\User', 4, 'auth_token', '0b0d8456ac63636b208774cbb3a6230fd48c2e415c822b3267e11d75f09b1d66', '[\"*\"]', NULL, NULL, '2025-03-04 05:23:51', '2025-03-04 05:23:51'),
(59, 'App\\Models\\User', 6, 'auth_token', '982d31a23d9bfa0eb1445387a9c86db47776d8ccfa6e24faad88e0b0aa5c0c31', '[\"*\"]', NULL, NULL, '2025-03-04 05:24:23', '2025-03-04 05:24:23'),
(60, 'App\\Models\\User', 6, 'auth_token', '6c817f8e933fa90049bd402ad7d4aeb15a49a93647efd889ceb5db336b48ca07', '[\"*\"]', NULL, NULL, '2025-03-04 23:14:07', '2025-03-04 23:14:07'),
(61, 'App\\Models\\User', 3, 'auth_token', '542582af2cb6a7b20dbc17d78ce4496241b509087eb5b2689e001daa3ffdbe97', '[\"*\"]', NULL, NULL, '2025-03-05 02:12:54', '2025-03-05 02:12:54'),
(62, 'App\\Models\\User', 7, 'auth_token', '7b3011ad4f25957a69f74c5a8c629c6556ff783f945bbd1a19b99f726c007fe4', '[\"*\"]', NULL, NULL, '2025-03-05 02:25:06', '2025-03-05 02:25:06'),
(63, 'App\\Models\\User', 7, 'auth_token', '6635948e8f4fd55eec810f3c2f8f239020e7aed1b19a61ae5590010218141918', '[\"*\"]', NULL, NULL, '2025-03-05 02:25:20', '2025-03-05 02:25:20'),
(64, 'App\\Models\\User', 6, 'auth_token', '6851ebeb80c777b1902a9d38810cbb675b255aad014910bb9532b3942e7381f6', '[\"*\"]', NULL, NULL, '2025-03-05 02:29:06', '2025-03-05 02:29:06'),
(65, 'App\\Models\\User', 7, 'auth_token', '95987587c864bd87ebb99d84f688bd6c1a9619447678389c917e066c8afaa044', '[\"*\"]', NULL, NULL, '2025-03-05 02:32:42', '2025-03-05 02:32:42'),
(66, 'App\\Models\\User', 1, 'auth_token', '23bf50f0648ccb935380d093e57995f6ea19ef3f54d94f276f5afa9969a76305', '[\"*\"]', NULL, NULL, '2025-03-05 04:41:14', '2025-03-05 04:41:14'),
(67, 'App\\Models\\User', 6, 'auth_token', 'd374de2223dc707e4a6665cd2a9bc55edc37fda17329f4244c9ab09e72ad39cf', '[\"*\"]', NULL, NULL, '2025-03-05 05:07:53', '2025-03-05 05:07:53'),
(68, 'App\\Models\\User', 4, 'auth_token', 'a2702a1d1f232a71ef0ce011fce09dfecaee734c06922f9219cfe9746b320f59', '[\"*\"]', NULL, NULL, '2025-03-05 05:28:46', '2025-03-05 05:28:46'),
(69, 'App\\Models\\User', 4, 'auth_token', 'aac335d84f7e8b2a79e584d310bb9f64b218ba2a9eb51e17653f7d992ca4213a', '[\"*\"]', NULL, NULL, '2025-03-05 15:17:58', '2025-03-05 15:17:58'),
(70, 'App\\Models\\User', 6, 'auth_token', '5349610723cb2fcb64d68fdf3b479a3650c50577fe401d974a7a9544fb0e0b5e', '[\"*\"]', NULL, NULL, '2025-03-05 19:12:36', '2025-03-05 19:12:36'),
(71, 'App\\Models\\User', 3, 'auth_token', 'ee820bb3483b3f4c5de02710d8d95e4e45c6f3e03c718c88e0eff130de3b358b', '[\"*\"]', NULL, NULL, '2025-03-05 19:55:28', '2025-03-05 19:55:28'),
(72, 'App\\Models\\User', 4, 'auth_token', 'a6646d547143d41ff77a3d9e06b5c580dd4b74d10d3078c5e120b0964861b477', '[\"*\"]', NULL, NULL, '2025-03-05 21:06:45', '2025-03-05 21:06:45'),
(73, 'App\\Models\\User', 3, 'auth_token', 'b8a12ec759febc362e8f66c8b048a91308ce0027f9378b1c7212790d0ff8d74d', '[\"*\"]', NULL, NULL, '2025-03-08 03:04:25', '2025-03-08 03:04:25'),
(74, 'App\\Models\\User', 4, 'auth_token', 'a9ee8eceba87941e9fa2034da49e82a40cb3861beb266ff420b932d47f68f9b7', '[\"*\"]', NULL, NULL, '2025-03-08 03:06:11', '2025-03-08 03:06:11'),
(75, 'App\\Models\\User', 6, 'auth_token', '5dbefd29176b0b62b320313e9855b540602e0c2f1aeb58c09d57312489a294e9', '[\"*\"]', NULL, NULL, '2025-03-08 03:07:08', '2025-03-08 03:07:08'),
(76, 'App\\Models\\User', 3, 'auth_token', '4a02d17ca55ae2c8e8a8c7fd2ab645eb7aec53c035a5cb7f62fbd7e98b31e7fc', '[\"*\"]', NULL, NULL, '2025-03-08 03:15:55', '2025-03-08 03:15:55'),
(77, 'App\\Models\\User', 6, 'auth_token', '878e48d2c625e1a4bcf2b82bd0892bc3d1f2926f82095607c26ab9d72c00a81c', '[\"*\"]', NULL, NULL, '2025-03-08 03:46:54', '2025-03-08 03:46:54'),
(78, 'App\\Models\\User', 3, 'auth_token', '9129f8f972f2fd7e7a7abe966bea35cf3d5ee05c0e6cd73c7030e74cd99c4fef', '[\"*\"]', NULL, NULL, '2025-03-11 00:48:57', '2025-03-11 00:48:57'),
(79, 'App\\Models\\User', 6, 'auth_token', 'cdb9e8edac6d5a2dbea956b2172dbdc6e8e1bc6dd295abdb5e782f91a18814f7', '[\"*\"]', NULL, NULL, '2025-03-11 00:51:48', '2025-03-11 00:51:48'),
(80, 'App\\Models\\User', 4, 'auth_token', '264f2eff18d3705355e19bc20487b27f56ac041e5d8cae06d85b591b388ffa46', '[\"*\"]', NULL, NULL, '2025-03-12 03:00:59', '2025-03-12 03:00:59'),
(81, 'App\\Models\\User', 3, 'auth_token', '3f34dfcc55ba0c0e5daeb8054e695352662f0d253c6063f8689f985844529ccf', '[\"*\"]', NULL, NULL, '2025-03-12 03:10:55', '2025-03-12 03:10:55'),
(82, 'App\\Models\\User', 8, 'auth_token', '50ce49db20e805550fe93868272932258b458dbb7cf0346aa3b1c365ecacf338', '[\"*\"]', NULL, NULL, '2025-03-12 03:23:46', '2025-03-12 03:23:46'),
(83, 'App\\Models\\User', 8, 'auth_token', 'b7a74f07f183a3b7a6f5b8eec038131bc6a3f755ba631fdda7e654c887dbae6c', '[\"*\"]', NULL, NULL, '2025-03-12 03:23:57', '2025-03-12 03:23:57'),
(84, 'App\\Models\\User', 6, 'auth_token', '3f7d266d2333b1c7ce413dd6f9e8f0d1f6bdeb56a3f19bcff3b77a8c1eab205c', '[\"*\"]', NULL, NULL, '2025-03-12 04:25:04', '2025-03-12 04:25:04'),
(85, 'App\\Models\\User', 8, 'auth_token', '8c3cdb38bac08356d8502c788358294afc61444ace5387f6dc467e6cffa19fc0', '[\"*\"]', NULL, NULL, '2025-03-12 04:26:17', '2025-03-12 04:26:17'),
(86, 'App\\Models\\User', 6, 'auth_token', '8583e90d11cc3b47467999b5f04cfc698bf4ea839ed2395724f83e4f6e1f2749', '[\"*\"]', NULL, NULL, '2025-03-12 04:33:30', '2025-03-12 04:33:30'),
(87, 'App\\Models\\User', 8, 'auth_token', 'e11d6ab6fc9bcf89f9b1e519949cd00e83712df914fa5114b53136df5082149e', '[\"*\"]', NULL, NULL, '2025-03-13 00:17:22', '2025-03-13 00:17:22'),
(88, 'App\\Models\\User', 4, 'auth_token', '4221195fb78ed522b9197da5e0dcd3cbcca8533534f65f32d2c4932156612860', '[\"*\"]', NULL, NULL, '2025-03-13 00:20:44', '2025-03-13 00:20:44'),
(89, 'App\\Models\\User', 8, 'auth_token', '5c1b21d5e7f9d35104c505dbfd285f5e28748ddd4eb44df67d24a09048790ea0', '[\"*\"]', NULL, NULL, '2025-03-13 00:23:19', '2025-03-13 00:23:19'),
(90, 'App\\Models\\User', 6, 'auth_token', '89d5229a7e4dab30b8799b2b9c6d1e368daeacd88ae87f65f6773f35c4336b3e', '[\"*\"]', NULL, NULL, '2025-03-13 00:23:51', '2025-03-13 00:23:51'),
(91, 'App\\Models\\User', 8, 'auth_token', '1b940e1e3dd92f686c4537ef6a293ff71675a6ce35b2b89f4849952dbcb7a302', '[\"*\"]', NULL, NULL, '2025-03-13 00:24:47', '2025-03-13 00:24:47'),
(92, 'App\\Models\\User', 6, 'auth_token', 'a81a8286195fe6311530424c158695af3f5ccb4231e8e3514b04e9f0f9b4e2e8', '[\"*\"]', NULL, NULL, '2025-03-13 00:27:22', '2025-03-13 00:27:22');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `category_id`, `name`, `description`, `price`, `created_at`, `updated_at`) VALUES
(1, 1, 'Energy Performance Certificate (EPC)', 'Under the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020, all private rented properties must comply with mandatory electrical safety checks at least once every five years.', 250.00, '2025-02-26 16:29:57', '2025-02-27 12:46:28'),
(2, 1, 'High quality boiler servicing', 'Regular boiler servicing is essential to ensuring your boiler is running safely and efficiently.\n\nDuring a boiler service, an engineer will visit your property and perform a series of safety and efficiency checks on your central heating system.', 250.00, '2025-02-26 11:52:05', '2025-02-26 11:52:05'),
(3, 1, 'Get a Gas Safety Certificate for your rented property', 'Landlords, letting agents, and property owners need a CP 12 or Gas Safety Certificate every 12 months to ensure the safe and efficient operation of all heat producing gas products in their property.', 150.00, '2025-02-26 12:06:31', '2025-02-26 12:06:31'),
(4, 1, 'MEES Reports', 'Our MEES reports provides you with recommendations so you can improve your properties energy efficiency rating. Our report will help you:\n\nIdentify the most cost effective measures\nHelp you implement changes\nCover Commercial & residential properties\nAs the UK’s largest property certification company, you’ll find our MEES reports both helpful, insightful and informative.', 169.00, '2025-02-26 12:17:27', '2025-02-26 12:17:27'),
(5, 2, 'Get a Commercial EPC for your property', 'If you’re a property owner, letting agent, or landlord planning to let or sell your commercial building we can help. \n\nWith fast turnaround times and local assessors covering the UK we can get your commerical property assessed rapidly.', 220.00, '2025-02-26 13:35:27', '2025-02-27 13:17:10'),
(8, 2, 'Commercial EICR testing and inspection', 'Under the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020, all private rented properties must comply with mandatory electrical safety checks at least once every five years.\n\nLandlords have a duty of care to their tenants. One way to demonstrate due diligence is through a commercial Electrical Installation Condition Report (EICR).\n\nLandlords have a responsibility to hire a qualified electrician to ensure all electrical fixtures are in satisfactory condition.', 150.00, '2025-02-27 13:22:26', '2025-02-27 13:22:26'),
(11, 1, 'Legionella risk assessments', 'Our team of experienced surveyors can conduct Legionella assessments nationwide. Keep your properties legally compliant under the Approved Code of Practice (ACoP L8, HSG 274) Guidelines.\n\nOur assessments cover the following:\n\nAll water systems are working effectively\nPipes and taps are cleaned and disinfected\nThe right water treatments are used\nStored water temperatures are correct\nEntire system are regularly flushed', 230.00, '2025-02-27 23:59:17', '2025-02-27 23:59:17'),
(12, 1, 'Get a Domestic EPC for your property', 'An Energy Performance Certificate, or EPC, is a legal requirement for property owners looking to let or sell their properties.\n\nIf you need a domestic EPC, we have assessors nationwide ready to inspect and assess your property. We pride ourselves on providing you with a fast, friendly and professional service.', 300.00, '2025-02-28 00:00:08', '2025-02-28 00:00:08'),
(13, 1, 'Fire risk assessment & safety regulations in the UK', 'Aside from ensuring your building’s safety, a fire risk assessment can also save you from costly legal penalties. The following fire safety legislations require all types of buildings (excluding domestic residential property) in the UK to undergo fire risk assessment:\n\nThe Regulatory Reform (Fire Safety) Order 2005 (England and Wales)\nThe Fire Safety Regulations 2006 (Scotland)\nThe Fire Safety Regulations 2010 (Northern Ireland)\nThis applies to public and commercial properties including offices, factories, schools, warehouses, hospitals, retail outlets, and other licensed premises.\n\nIt is the duty of landlords and property owners to ensure their tenants’ safety from fire-related accidents. Ideally, a fire risk assessment should be done annually to ensure maximum protection.', 350.00, '2025-02-28 00:01:03', '2025-02-28 00:01:03'),
(14, 1, 'Portable Appliance Testing (PAT) for your property', 'PAT or Portable Appliance Testing is performed to ensure the safety of each appliance in a business or workplace. Employers and landlords have a duty to maintain safety in these spaces.\n\nPAT Testing makes sure appliances and electrical equipment are work properly and are not safety risks to their surroundings.\n\nIf you need testing done on your appliances, PropCert’s team of well trained electricians has worked with a wide variety of manufacturers and can give you reliable results and recommendations.', 100.00, '2025-02-28 00:01:58', '2025-02-28 00:01:58'),
(15, 1, 'Inventory Reports', 'Our comprehensive Inventory Report documents the state of your property, covering all aspects, from fixtures to furnishings.\n\nHigh-resolution photographs of every room, outdoor spaces, and any specific areas —like valuable items or damages—provide a detailed visual record.\n\nAdditionally, meter readings, keys, and cleanliness are documented so a thorough evaluation of the property’s condition is reported.', 150.00, '2025-02-28 00:02:43', '2025-02-28 00:02:43');

-- --------------------------------------------------------

--
-- Table structure for table `service_categories`
--

CREATE TABLE `service_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `service_categories`
--

INSERT INTO `service_categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Residential', '2025-02-26 16:28:32', '2025-02-26 16:28:32'),
(2, 'Commercial', '2025-02-26 12:19:55', '2025-02-26 12:19:55'),
(5, 'New Build', '2025-03-04 05:25:46', '2025-03-04 05:25:46');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('2gwSShYJHmLJpDT6dHpOKQpUUGi2QY8erJV7Elqa', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRHl6SGJLeXU1QTZDU2RpMTNHMzd3ejhkSmtxWjhCYkJkR3M2UTdaWiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741182752),
('3IwdSGutfnMaXyg4HFDKCFtAL8t4W0YH4Kv4Omko', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidEo2M0haNkJVN2V2U29wT3lLa0MxM2R4MDY0cGpTOUdocTY4RFMxNiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741076629),
('868uE30E77CcukhOjztFcu4cRcmtcJTiK1yJzA9u', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiR3BIeDdFZ09leHBBYlZtd0lDOG00RWlCQkZTcVlUdTFDSmxrWUUyNiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740911024),
('8jUhQuRCkHOjRQPIIp2BghwaCEnpNR31PJukgMbo', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVXluNlNTSTdYQ3JlWDV2N2VCZ1RZd1NZMlVMWk1Wc0pqUmNERmplaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741107559),
('8NJefIofutkbOYOMhCDsePB99MNDHrXx0hPZLCvJ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidUMwSU15ZFlOWWZkcFlDc3pCMmdRZjU4eHhpQnVZMXNCcTdYNnhRNSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741797142),
('94mrrnudxofxt4jGFLAI7YA0Lt6qmgjqIv4taMA0', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibVZUS2M4ZnVqN3dDRHl2dUFSR3IwWXVrTTNoM3VvOFZBT2ptWW03SiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740503999),
('BJLsuJsYBHB7SSLAuWDCfPPVZWEPbWR9qFDfx612', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVE1pUmlpRUxJVXlyMnZwRnhFaXZ0WHh4ODh3SUU0SExLZGYzZTZHMSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740846577),
('cSBhBYEY4MQWIFrs9HrrOgPuWLBzTjHKdOnENvYX', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMjkxYUtxeHpIUTRpVzQwMzQzRWg3Y0Z2amFBSVZzMEJZblJUaVdUbCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740978701),
('DAVa9DbK6LJhJpWtxFLgDqFPsDwfORsKxCIikQjw', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQ0dOdDZmNm1iN3MzdjF5UnEwMjNPdlloa2FzVWdyaHVXRXBaa05qNiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740469351),
('F6Xb2YJAjSNoCDSphk1Is4A8pb5ivmppYscUyAKI', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicEpMY2pydndZUU9pMDk5YlNQMlBOcEVubXRySXJBZzFOdW1ZdEpsbyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741845207),
('jGqdknsa5CakaOdufgbxfUJ3LvWANq8eutaByrU8', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZFhOckgyN2NXa0hpZkRLZFJ6M0ZvS2p5TVhWb1JsUXZBNWxvaEtzMCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741006348),
('Lnom7GgmBBOYfXiO1JVuwnCgfraFNsdNvHfLH3v9', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQUJoTzNsTUhOTVJWSEw5WUlpT09kQ09FbVB4TE1Mb2xKM2FJcmM3ZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740735571),
('LqWG7biYl2s6fvkMp7CzopssQmKixkkh4pFwQrUV', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibjBGeHhXejVJRUdtaWZsaDEybnhsZmhSN1lqN3F5Q0k5RUNZOEJmViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741153613),
('MkcZLWWj3EPlbuuqVyAZ1Baq0NEAf4ccSkTP3893', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNG16WGQ3QzJ0a0FWZUE0UnNYNnpta0RTeTNtd2hTbUdHZW4xN001WiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741424562),
('Q3MxJCUiTLBtynQ1Qr87ZeVIYAqmvHysrQck9FzC', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUk9hU2wwbTlBaGdoMGZRTTEwWVJzQ3lnbkhreGFvZm5YazJJSGFHMiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741772655),
('Q6e9zz5A3I0kffEn1nc5zmOHZsPAErw7cQQmdVr2', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoib2VSVTlQYnpTT1I1ZndsUzJpdWx4RmVoNFRackRQWWhqSVEzcnNybSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741675572),
('rvkO8NMalQf7QjPai77tkyXDb2tXzrItyQ9m7AIj', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVHNsWGNNemg3MGJQb28xSWxXdG1VU2hrSmxRWXRTM1ZmOVhYZTNGZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741019198),
('srgZyDFn3GHOt8nW3I4L0VPThHVzKWeues76P9Sh', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicmdiSGFMbnRQdVhnR3R4a2FiTWhTdlBUNGNnSXhZZTllbWVLMkNGdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740673254),
('vbByixRV7WwUAaxguEQJHpHgiyKuKszUqF7FLGLk', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSGIyRlVlS2ljSWdrbkc3Z0lYM21PQ3JLTjkybWdtRnBFTmFCZXB5RCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1741192534),
('vpkQAqqqmPKxIQUR78AzRcNcH6ChAfoNAKgedcYl', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVFJEdmJrQ0JpU0JLSklCVkY3aGN1V3ByOG9vUk1tVlptYW1PcnMwTSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740894988),
('w0irYgkz3l0tldBjxMSYl7LnWSpCPQZc33fXZUOB', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOUN5WkdjNjU0eGdqanFiQzBGWlZuR0NIT2RmN1NsTm5SRUZxRU81cCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740934633),
('wAlhFnU1gK4d62zg3sTZHqSMobhr8vpvqIaCB0PO', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWVBVOERTbFJFSWpHTmpQbjIzcTZkc2dlS0RBMGxZMG1XRDBsOUFXcyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740715311),
('Yv0sqdP6qrwzsXu587z0WzqqukofCBgWko5n4iE9', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiamxBYWZRb0U5VEhRVmdiZ01lM1RJTmxNYjQwNzlXM1B1YjZCbGNJdSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740477866),
('zaK8grKgUQjOsdLQ184jHVtyS6gl3CpCrcAbtZG1', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMU40eEFCTDZjWlpHWkE5a0p2WEMwd0tGWnRCdzJ2QnZYSXgxZGlVOSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1740575233);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `api_token` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `image`, `api_token`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Rajib Hossain', 'info@gmail.com', NULL, '$2y$12$VFFifHyemT0aJ7//5tqmFu08TgXkazkBoLzyTbSmcknjR21rPSll.', 'customer', NULL, NULL, NULL, '2025-02-25 02:53:01', '2025-02-25 02:53:01'),
(2, 'Rakib', 'rakib@gamil.com', NULL, '$2y$12$6mKM9arj5ISfmg1rNMLeh.RBN651QbSI3LodkWnp90/Xj8/AarvhC', 'customer', NULL, NULL, NULL, '2025-02-25 05:58:26', '2025-02-25 05:58:26'),
(3, 'Imran Hossain', 'imran@gmail.com', NULL, '$2y$12$10Wlj9MJBVsMcRBEhNNT3OyIPj.LOUIJiXuINv/PMqNYmcv7rHN36', 'customer', NULL, '6|RjUwoWEudziXeHsCWmJ9GH6n9FcObS2D9XO13hC0bf991b21', NULL, '2025-02-25 06:12:11', '2025-02-25 06:12:11'),
(4, 'rajib', 'rajib@gmail.com', NULL, '$2y$12$rpfIOvPFfb4323.BS6lRqOvUTpYDGikFP.DqWSVIDEqReCs4vgRsK', 'inspector', NULL, NULL, NULL, '2025-02-25 13:22:24', '2025-02-25 13:22:24'),
(6, 'admin', 'admin@gmail.com', NULL, '$2y$12$47JUY48i3oXJufAJTSfs3erD8GOrP0M4kynAWt2aZ0FGMflcW/VYm', 'admin', NULL, NULL, NULL, '2025-03-04 02:35:27', '2025-03-04 02:35:27'),
(7, 'sumon', 'sumon@gmail.com', NULL, '$2y$12$8GZYoiETFNqUFIqzNtoFy.ccoPq5ZYbKSOMBCkqWEEyy5LC3j8yIy', 'customer', NULL, NULL, NULL, '2025-03-05 02:25:06', '2025-03-05 02:25:06'),
(8, 'Rukaiya', 'rukaiya@gmail.com', NULL, '$2y$12$jFOVUhxopVynHmBpqDVPjul/okdm2nXHKgW2WH/QUOqRwerzOFlc2', 'customer', NULL, NULL, NULL, '2025-03-12 03:23:46', '2025-03-12 03:23:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment_details`
--
ALTER TABLE `appointment_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `appointment_details_booking_id_unique` (`booking_id`),
  ADD KEY `appointment_details_user_id_foreign` (`user_id`);

--
-- Indexes for table `appointment_services`
--
ALTER TABLE `appointment_services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_category_id_foreign` (`category_id`);

--
-- Indexes for table `service_categories`
--
ALTER TABLE `service_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `service_categories_name_unique` (`name`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment_details`
--
ALTER TABLE `appointment_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `appointment_services`
--
ALTER TABLE `appointment_services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `service_categories`
--
ALTER TABLE `service_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment_details`
--
ALTER TABLE `appointment_details`
  ADD CONSTRAINT `appointment_details_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `service_categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
