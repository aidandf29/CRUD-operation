--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: norak; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.norak AS ENUM (
    '1a',
    '2a',
    '3a',
    '1b',
    '2b',
    '3b'
);


ALTER TYPE public.norak OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: gudang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gudang (
    buku character varying(25) NOT NULL,
    author character varying(25) NOT NULL,
    jenis character varying(10) NOT NULL,
    stok integer NOT NULL,
    harga_jual integer NOT NULL,
    rak public.norak NOT NULL
);


ALTER TABLE public.gudang OWNER TO postgres;

--
-- Data for Name: gudang; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gudang (buku, author, jenis, stok, harga_jual, rak) FROM stdin;
Guru Aini	Andrea Hirata	Novel	10	100000	1a
Atomic Habits	James Clear	Ilmiah	20	70000	1a
Laskar Pelangi	Andrea Hirata	Novel	10	100000	2b
Dear Nathan	Andrea Hirata	Novel	33	99000	2b
Harry Potter	J.K Rowling	Novel	36	89000	2b
Naruto	Masashi Kishimoto	Komik	99	19000	2b
One Piece	Echiro Oda	Komik	55	21000	1b
\.


--
-- Name: gudang gudang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gudang
    ADD CONSTRAINT gudang_pkey PRIMARY KEY (buku);


--
-- PostgreSQL database dump complete
--

