USE [master]
GO
/****** Object:  Database [MadaWoodDB]    Script Date: 02/05/2020 12:52:28 ******/
CREATE DATABASE [MadaWoodDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MadaWoodDB', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\MadaWoodDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MadaWoodDB_log', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\MadaWoodDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [MadaWoodDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MadaWoodDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MadaWoodDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MadaWoodDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MadaWoodDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MadaWoodDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MadaWoodDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [MadaWoodDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MadaWoodDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MadaWoodDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MadaWoodDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MadaWoodDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MadaWoodDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MadaWoodDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MadaWoodDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MadaWoodDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MadaWoodDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MadaWoodDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MadaWoodDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MadaWoodDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MadaWoodDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MadaWoodDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MadaWoodDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MadaWoodDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MadaWoodDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [MadaWoodDB] SET  MULTI_USER 
GO
ALTER DATABASE [MadaWoodDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MadaWoodDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MadaWoodDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MadaWoodDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MadaWoodDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MadaWoodDB] SET QUERY_STORE = OFF
GO
USE [MadaWoodDB]
GO
/****** Object:  Table [dbo].[Article]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Article](
	[ArticleID] [int] IDENTITY(1,1) NOT NULL,
	[Nom] [varchar](50) NULL,
	[Surnom] [varchar](50) NULL,
	[CategorieID] [int] NULL,
 CONSTRAINT [PK_Article] PRIMARY KEY CLUSTERED 
(
	[ArticleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Artisan]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Artisan](
	[ArtisanID] [int] IDENTITY(1,1) NOT NULL,
	[Nom] [varchar](50) NULL,
	[QualificationArtisanID] [int] NULL,
 CONSTRAINT [PK_Artisan] PRIMARY KEY CLUSTERED 
(
	[ArtisanID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categorie]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categorie](
	[CategorieID] [int] IDENTITY(1,1) NOT NULL,
	[Nom] [varchar](50) NULL,
	[CollectionID] [int] NULL,
 CONSTRAINT [PK_Categorie] PRIMARY KEY CLUSTERED 
(
	[CategorieID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Collection]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Collection](
	[CollectionID] [int] IDENTITY(1,1) NOT NULL,
	[Nom] [varchar](50) NULL,
 CONSTRAINT [PK_Collection] PRIMARY KEY CLUSTERED 
(
	[CollectionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HistoriqueStatutTache]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HistoriqueStatutTache](
	[HistoriqueStatutTacheID] [int] IDENTITY(1,1) NOT NULL,
	[TacheID] [int] NULL,
	[StatutProductionID] [int] NULL,
	[Date de modification] [datetime] NULL,
 CONSTRAINT [PK_HistoriqueStatutTache] PRIMARY KEY CLUSTERED 
(
	[HistoriqueStatutTacheID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Piece]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Piece](
	[PieceID] [int] IDENTITY(1,1) NOT NULL,
	[Nom] [varchar](50) NULL,
	[ArticleID] [int] NULL,
 CONSTRAINT [PK_Piece] PRIMARY KEY CLUSTERED 
(
	[PieceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Production]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Production](
	[ProductionID] [int] IDENTITY(1,1) NOT NULL,
	[ProduitID] [int] NULL,
	[Date de creation] [datetime] NULL,
	[Date de modification] [datetime] NULL,
	[StatutProductionID] [int] NULL,
	[Temps] [datetime] NULL,
 CONSTRAINT [PK_Production] PRIMARY KEY CLUSTERED 
(
	[ProductionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductionTacheArtisan]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductionTacheArtisan](
	[ProductionTacheArtisanID] [int] NOT NULL,
	[ProductionID] [int] NULL,
	[ArtisanID] [int] NULL,
	[TacheID] [int] NULL,
	[Temps] [varchar](50) NULL,
	[HistoriqueStatutTacheID] [int] NULL,
 CONSTRAINT [PK_ProductionTacheArtisan] PRIMARY KEY CLUSTERED 
(
	[ProductionTacheArtisanID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Produit]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Produit](
	[ProduitID] [int] IDENTITY(1,1) NOT NULL,
	[StatutProduitID] [int] NULL,
	[PieceID] [int] NULL,
	[CodeBarre] [nvarchar](max) NULL,
 CONSTRAINT [PK_Produit] PRIMARY KEY CLUSTERED 
(
	[ProduitID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[QualificationArtisan]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QualificationArtisan](
	[QualificationArtisanID] [int] IDENTITY(1,1) NOT NULL,
	[Nom] [varchar](50) NULL,
 CONSTRAINT [PK_QualificationArtisan] PRIMARY KEY CLUSTERED 
(
	[QualificationArtisanID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StatutProduction]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StatutProduction](
	[StatutProductionID] [int] IDENTITY(1,1) NOT NULL,
	[Nom] [varchar](50) NULL,
 CONSTRAINT [PK_StatutProduction] PRIMARY KEY CLUSTERED 
(
	[StatutProductionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StatutProduit]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StatutProduit](
	[StatutProduitID] [int] IDENTITY(1,1) NOT NULL,
	[Nom] [varchar](50) NULL,
 CONSTRAINT [PK_StatutProduit] PRIMARY KEY CLUSTERED 
(
	[StatutProduitID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tache]    Script Date: 02/05/2020 12:52:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tache](
	[TacheID] [int] IDENTITY(1,1) NOT NULL,
	[Nom] [varchar](50) NULL,
 CONSTRAINT [PK_Tache] PRIMARY KEY CLUSTERED 
(
	[TacheID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Article]  WITH CHECK ADD  CONSTRAINT [FK_Article_Categorie] FOREIGN KEY([CategorieID])
REFERENCES [dbo].[Categorie] ([CategorieID])
GO
ALTER TABLE [dbo].[Article] CHECK CONSTRAINT [FK_Article_Categorie]
GO
ALTER TABLE [dbo].[Artisan]  WITH CHECK ADD  CONSTRAINT [FK_Artisan_QualificationArtisan] FOREIGN KEY([QualificationArtisanID])
REFERENCES [dbo].[QualificationArtisan] ([QualificationArtisanID])
GO
ALTER TABLE [dbo].[Artisan] CHECK CONSTRAINT [FK_Artisan_QualificationArtisan]
GO
ALTER TABLE [dbo].[Categorie]  WITH CHECK ADD  CONSTRAINT [FK_Categorie_Collection] FOREIGN KEY([CollectionID])
REFERENCES [dbo].[Collection] ([CollectionID])
GO
ALTER TABLE [dbo].[Categorie] CHECK CONSTRAINT [FK_Categorie_Collection]
GO
ALTER TABLE [dbo].[HistoriqueStatutTache]  WITH CHECK ADD  CONSTRAINT [FK_HistoriqueStatutTache_StatutProduction] FOREIGN KEY([StatutProductionID])
REFERENCES [dbo].[StatutProduction] ([StatutProductionID])
GO
ALTER TABLE [dbo].[HistoriqueStatutTache] CHECK CONSTRAINT [FK_HistoriqueStatutTache_StatutProduction]
GO
ALTER TABLE [dbo].[HistoriqueStatutTache]  WITH CHECK ADD  CONSTRAINT [FK_HistoriqueStatutTache_Tache] FOREIGN KEY([TacheID])
REFERENCES [dbo].[Tache] ([TacheID])
GO
ALTER TABLE [dbo].[HistoriqueStatutTache] CHECK CONSTRAINT [FK_HistoriqueStatutTache_Tache]
GO
ALTER TABLE [dbo].[Piece]  WITH CHECK ADD  CONSTRAINT [FK_Piece_Article] FOREIGN KEY([ArticleID])
REFERENCES [dbo].[Article] ([ArticleID])
GO
ALTER TABLE [dbo].[Piece] CHECK CONSTRAINT [FK_Piece_Article]
GO
ALTER TABLE [dbo].[Production]  WITH CHECK ADD  CONSTRAINT [FK_Production_Produit] FOREIGN KEY([ProduitID])
REFERENCES [dbo].[Produit] ([ProduitID])
GO
ALTER TABLE [dbo].[Production] CHECK CONSTRAINT [FK_Production_Produit]
GO
ALTER TABLE [dbo].[ProductionTacheArtisan]  WITH CHECK ADD  CONSTRAINT [FK_ProductionTacheArtisan_Artisan] FOREIGN KEY([ArtisanID])
REFERENCES [dbo].[Artisan] ([ArtisanID])
GO
ALTER TABLE [dbo].[ProductionTacheArtisan] CHECK CONSTRAINT [FK_ProductionTacheArtisan_Artisan]
GO
ALTER TABLE [dbo].[ProductionTacheArtisan]  WITH CHECK ADD  CONSTRAINT [FK_ProductionTacheArtisan_HistoriqueStatutTache] FOREIGN KEY([HistoriqueStatutTacheID])
REFERENCES [dbo].[HistoriqueStatutTache] ([HistoriqueStatutTacheID])
GO
ALTER TABLE [dbo].[ProductionTacheArtisan] CHECK CONSTRAINT [FK_ProductionTacheArtisan_HistoriqueStatutTache]
GO
ALTER TABLE [dbo].[ProductionTacheArtisan]  WITH CHECK ADD  CONSTRAINT [FK_ProductionTacheArtisan_Production] FOREIGN KEY([ProductionID])
REFERENCES [dbo].[Production] ([ProductionID])
GO
ALTER TABLE [dbo].[ProductionTacheArtisan] CHECK CONSTRAINT [FK_ProductionTacheArtisan_Production]
GO
ALTER TABLE [dbo].[ProductionTacheArtisan]  WITH CHECK ADD  CONSTRAINT [FK_ProductionTacheArtisan_Tache] FOREIGN KEY([TacheID])
REFERENCES [dbo].[Tache] ([TacheID])
GO
ALTER TABLE [dbo].[ProductionTacheArtisan] CHECK CONSTRAINT [FK_ProductionTacheArtisan_Tache]
GO
ALTER TABLE [dbo].[Produit]  WITH CHECK ADD  CONSTRAINT [FK_Produit_Piece] FOREIGN KEY([PieceID])
REFERENCES [dbo].[Piece] ([PieceID])
GO
ALTER TABLE [dbo].[Produit] CHECK CONSTRAINT [FK_Produit_Piece]
GO
ALTER TABLE [dbo].[Produit]  WITH CHECK ADD  CONSTRAINT [FK_Produit_StatutProduit] FOREIGN KEY([StatutProduitID])
REFERENCES [dbo].[StatutProduit] ([StatutProduitID])
GO
ALTER TABLE [dbo].[Produit] CHECK CONSTRAINT [FK_Produit_StatutProduit]
GO
USE [master]
GO
ALTER DATABASE [MadaWoodDB] SET  READ_WRITE 
GO
