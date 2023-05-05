USE [SPITALI]
GO
/****** Object:  Database [SPITALI]    Script Date: 5/1/2023 11:17:46 AM ******/
CREATE DATABASE [SPITALI]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SPITALI', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\SPITALI.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'SPITALI_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\SPITALI_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [SPITALI] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SPITALI].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SPITALI] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SPITALI] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SPITALI] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SPITALI] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SPITALI] SET ARITHABORT OFF 
GO
ALTER DATABASE [SPITALI] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [SPITALI] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SPITALI] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SPITALI] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SPITALI] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SPITALI] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SPITALI] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SPITALI] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SPITALI] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SPITALI] SET  ENABLE_BROKER 
GO
ALTER DATABASE [SPITALI] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SPITALI] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SPITALI] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SPITALI] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SPITALI] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SPITALI] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SPITALI] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SPITALI] SET RECOVERY FULL 
GO
ALTER DATABASE [SPITALI] SET  MULTI_USER 
GO
ALTER DATABASE [SPITALI] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SPITALI] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SPITALI] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SPITALI] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [SPITALI] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [SPITALI] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'SPITALI', N'ON'
GO
ALTER DATABASE [SPITALI] SET QUERY_STORE = ON
GO
ALTER DATABASE [SPITALI] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [SPITALI]
GO
/****** Object:  Table [dbo].[Dhoma]    Script Date: 5/1/2023 11:17:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dhoma](
	[DhomaID] [char](10) NOT NULL,
	[Lloji_i_dhomes] [varchar](50) NOT NULL,
	[Numri_i_shtreterve] [int] NOT NULL,
	[Statusi_i_mirembajtjes] [varchar](100) NOT NULL,
	[Pacienti] [char](10) NULL,
 CONSTRAINT [PK_Dhoma] PRIMARY KEY CLUSTERED 
(
	[DhomaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Diagnoza]    Script Date: 5/1/2023 11:17:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Diagnoza](
	[DiagnozaID] [char](10) NOT NULL,
	[Emri_i_Diagnozes] [varchar](50) NOT NULL,
	[Pershkrimi] [varchar](100) NULL,
	[Trajtimi] [varchar](200) NOT NULL,
 CONSTRAINT [PK_Diagnoza] PRIMARY KEY CLUSTERED 
(
	[DiagnozaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Doktor]    Script Date: 5/1/2023 11:17:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Doktor](
	[DoktorID] [char](10) NOT NULL,
	[Emri] [varchar](100) NOT NULL,
	[Specializimi] [varchar](100) NOT NULL,
	[NumriTelefonit] [varchar] (20) NOT NULL,
	[Email] [varchar] (100) NOT NULL

 CONSTRAINT [PK_Doktor] PRIMARY KEY CLUSTERED 
(

	[DoktorID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Infermier]    Script Date: 5/1/2023 11:17:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Infermier](
	[InfermierID] [char](10) NOT NULL,
	[Nderrimi] [varbinary](50) NOT NULL,
	[StafiID] [char](10) NOT NULL,
 CONSTRAINT [PK_Infermier] PRIMARY KEY CLUSTERED 
(
	[InfermierID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Kontrolla]    Script Date: 5/1/2023 11:17:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Kontrolla](
	[KontrollaID] [char](10) NOT NULL,
	[PacientiID] [char](10) NOT NULL,
	[DoktorID] [char](10) NOT NULL,
 CONSTRAINT [PK_Kontrolla] PRIMARY KEY CLUSTERED 
(
	[KontrollaID] ASC,
	[PacientiID] ASC,
	[DoktorID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pacienti]    Script Date: 5/1/2023 11:17:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pacienti](
	[PacientiID] [char](10) NOT NULL,
	[Emri] [varchar](50) NOT NULL,
	[Mbiemri] [varchar](50) NOT NULL,
	[Datelindja] [date] NOT NULL,
	[Numri_i_telefonit] [varchar](20) NOT NULL,
	[Qyteti] [varchar](50) NULL,
	[Shteti] [varchar](50) NULL,
 CONSTRAINT [PK_Pacienti] PRIMARY KEY CLUSTERED 
(
	[PacientiID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Recepsionist]    Script Date: 5/1/2023 11:17:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Recepsionist](
	[RecepsionistID] [char](10) NOT NULL,
	[Shkollimi] [varchar](150) NOT NULL,
	[StafiID] [char](10) NULL,
 CONSTRAINT [PK_Recepsionist] PRIMARY KEY CLUSTERED 
(
	[RecepsionistID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Stafi]    Script Date: 5/1/2023 11:17:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Stafi](
	[StafiID] [char](10) NOT NULL,
	[Emri] [varchar](50) NOT NULL,
	[Mbiemri] [varchar](50) NOT NULL,
	[Numri_i_telefonit] [varchar](20) NOT NULL,
 CONSTRAINT [PK_Stafi] PRIMARY KEY CLUSTERED 
(
	[StafiID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Termini]    Script Date: 5/1/2023 11:17:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Termini](
	[TerminiID] [char](10) NOT NULL,
 CONSTRAINT [PK_Termini] PRIMARY KEY CLUSTERED 
(
	[TerminiID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 5/1/2023 11:17:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](30) NOT NULL,
	[Surname] [varchar](30) NOT NULL,
	[Email] [varchar](30) NOT NULL,
	[Password] [varchar](30) NOT NULL,
	[Role] [varchar](30) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Dhoma]    Script Date: 5/1/2023 11:17:47 AM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Dhoma] ON [dbo].[Dhoma]
(
	[DhomaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_Role]  DEFAULT ('Patient') FOR [Role]
GO
ALTER TABLE [dbo].[Dhoma]  WITH CHECK ADD  CONSTRAINT [FK_Dhoma_Pacienti] FOREIGN KEY([Pacienti])
REFERENCES [dbo].[Pacienti] ([PacientiID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Dhoma] CHECK CONSTRAINT [FK_Dhoma_Pacienti]
GO
ALTER TABLE [dbo].[Doktor]  WITH CHECK ADD  CONSTRAINT [FK_Doktor_Stafi] FOREIGN KEY([DoktorID])
REFERENCES [dbo].[Stafi] ([StafiID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Doktor] CHECK CONSTRAINT [FK_Doktor_Stafi]
GO
ALTER TABLE [dbo].[Infermier]  WITH CHECK ADD  CONSTRAINT [FK_Infermier_Stafi] FOREIGN KEY([InfermierID])
REFERENCES [dbo].[Stafi] ([StafiID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Infermier] CHECK CONSTRAINT [FK_Infermier_Stafi]
GO
ALTER TABLE [dbo].[Kontrolla]  WITH CHECK ADD  CONSTRAINT [FK_Kontrolla_Doktor] FOREIGN KEY([DoktorID])
REFERENCES [dbo].[Doktor] ([DoktorID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Kontrolla] CHECK CONSTRAINT [FK_Kontrolla_Doktor]
GO
ALTER TABLE [dbo].[Kontrolla]  WITH CHECK ADD  CONSTRAINT [FK_Kontrolla_Pacienti] FOREIGN KEY([PacientiID])
REFERENCES [dbo].[Pacienti] ([PacientiID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Kontrolla] CHECK CONSTRAINT [FK_Kontrolla_Pacienti]
GO
ALTER TABLE [dbo].[Recepsionist]  WITH CHECK ADD  CONSTRAINT [FK_Recepsionist_Stafi] FOREIGN KEY([RecepsionistID])
REFERENCES [dbo].[Stafi] ([StafiID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Recepsionist] CHECK CONSTRAINT [FK_Recepsionist_Stafi]
GO
USE [master]
GO
ALTER DATABASE [SPITALI] SET  READ_WRITE 
GO
CREATE TABLE [dbo].[Contact](
    [ContactID] [int] identity(1,1) primary key,
    [Name] [varchar](50) NOT NULL,
    [Email] [varchar](50) NOT NULL,
    [Number] [varchar](20) NOT NULL,
    [Message] [varchar](255) NOT NULL,
    )
insert into Users values('Vesa', 'Fetahaj', 'vesafetahaj2@gmail.com', 'Vesa2004', 'Patient');
select * from Users
update Users set Password = 'Roi2019' where UserId = 4
insert into Pacienti values(1,'Vesa', 'Fetahaj', '01/01/01', '049145145', 'Peje', 'Kosove');
select * from Pacienti

insert into Doktor values (111,'Elsa Tomaj','Stomatologji', '049799935', 'elsatomaj@gmail.com');

select * from Contact