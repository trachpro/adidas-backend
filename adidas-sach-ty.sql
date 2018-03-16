drop database if exists dbadidas;
create database dbadidas;
use dbadidas;

create table loainhanvien(
    maloainv int auto_increment,
    tenloainv nvarchar(50),

    constraint loainhanvien_maloainv primary key (maloainv)
);

create table choduyetkh(
    makh int auto_increment,
    tenkh nvarchar(50) not null,
    sdt varchar(13) not null,
    diachi nvarchar(200) not null,
    mk varchar(20),
    maloainv int not null,
    email varchar(30),

    constraint choduyetkh_makh primary key (makh),
    constraint choduyetkh_maloainv foreign key (maloainv) references loainhanvien (maloainv)
);

create table khachhang(
    makh int auto_increment,
    tenkh nvarchar(50) not null,
    sdt varchar(13) not null,
    diachi nvarchar(200) not null,
    mk varchar(20),
    maloainv int not null,
    email varchar(30),

    constraint khachhang_makh primary key (makh),
    constraint khachhang_maloainv foreign key (maloainv) references loainhanvien (maloainv)
);


create table trietkhau(
    matk int auto_increment,
    ngay date,
    giatri float(2,2),

    constraint trietkhau_matk primary key (matk)
);

create table sanpham(
    masp int auto_increment,
    macode varchar(10) not null,
    tensp nvarchar(20),
    trangweb varchar(200),
    giaweb decimal,
    khoiluong float(3,3),
    ghichu text,

    constraint sanpham_masp primary key (masp)
);

create table donhang(
    madh int auto_increment,
    ngay varchar(20),
    tienyen varchar(30),
    datcoc varchar(30),
    taikhoan varchar(30),
    thuonghieu nvarchar(20),
    tigia varchar(30),
    trangthai int not null,
    ghichu text,
    macheck int,
    makh int not null,

    constraint donhang_madh primary key (madh),
    constraint donhang_makh foreign key (makh) references khachhang (makh)
);

create table chitietdh(
    madh int,
    masp varchar(10),
    soluong int,
    macheck int,
    makh int not null,

    constraint chitietdh_madh_masp primary key (madh, masp),
    constraint chitietdh_madh foreign key (madh) references donhang (madh),
    constraint chitietdh_macheck foreign key (macheck) references khachhang (makh),
    constraint chitietdh_makh foreign key (makh) references khachhang (makh)
);

create table hoadon(
    mahd int auto_increment,
    madh int,
    ngay varchar(10),
    ngaygiao varchar(10),
    makh int not null,
    trangthai int,
    datcoc varchar(20),
    ship varchar(20),
    macheck int,

    constraint hoadon_mahd primary key (mahd),
    constraint hoadon_mahk foreign key (makh) references khachhang (makh),
    constraint hoadon_macheck foreign key (macheck) references khachhang (makh),
    constraint hoadon_madh foreign key (madh) references donhang (madh)
);

create table chitiethd(
    mahd int,
    masp varchar(10),
    soluong int,
    trangweb varchar(30),
    giaweb varchar(20),
    trietkhau varchar(10),
    khoiluong varchar(10),
    tigia varchar(10),
    macheck int,
    makh int,
    giuhop int,
    madh int,

    constraint chitiethd_mahd_masp primary key (mahd, masp),
    constraint chitiethd_mahd foreign key (mahd) references hoadon (mahd),
    constraint chitiethd_makh foreign key (makh) references khachhang (makh),
    constraint chitiethd_macheck foreign key (macheck) references khachhang (makh),
    constraint chitiethd_madhforeign foreign key (madh) references donhang (madh)
);



insert into `loainhanvien` (`maloainv`, `tenloainv`) values
(1, 'admin'),
(2, 'khachhang'),
(3, 'khachbuon'),
(4, 'nguoimua'),
(5, 'shipper'),
(6, 'nguoinhan');
insert into `khachhang` (`makh`, `tenkh`, `sdt`, `diachi`, `mk`, `maloainv`, `email`) values
(1, 'admin', '1234', 'xuân trường - nam định', 'nopass', 1, 'trachpro'),
(2, 'khachhang', '222', 'xóm 2 - xuân dục - xuân ninh', 'nopass', 2, 'vãi lúa'),
(3, 'khachbuon', '333', 'xóm 2 - xuân dục - xuân ninh', 'nopass', 3, 'vãi lúa'),
(4, 'nguoimua', '444', 'xóm 2 - xuân dục - xuân ninh', 'nopass', 4, 'vãi lúa'),
(5, 'shipper', '555', 'xóm 2 - xuân dục - xuân ninh', 'nopass', 5, 'vãi lúa');

insert into `trietkhau` (`matk`,`ngay`,`giatri`) values
(1, '2018-01-01',0.5);

insert into `sanpham` (`masp`, `macode`, `tensp`, `trangweb`, `giaweb`,`khoiluong`,`ghichu`) values
(1, 'e00', 'dienthoai', 'http', 123,0,'san pham nay rat tuyet voi'),
(2, 'e01', 'dep', 'https', 123,0,'san pham nay rat tuyet voit'),
(3, 'e02', 'day', 'httpss', 123,0,'san pham nay rat tuyet voig');

insert into `donhang` (`madh`, `ngay`, `tienyen`, `tigia`, `trangthai`, `ghichu`, `makh`,`macheck`,`taikhoan`,`thuonghieu`,`datcoc`) values
(1, '2018-01-01', '5.2', '201', 5, 'không có ghi chú j', 4, 4,'adidas2018','adidas','2000000');

insert into `chitietdh` (`madh`, `masp`, `soluong`,`macheck`,`makh`) values
(1, "MK20112", 2, 4, 2),
(1, "ZR3311", 44, 4, 2);

insert into `hoadon` (`mahd`, `ngay`,`ngaygiao`, `makh`, `trangthai`, `datcoc`,`macheck`,`ship`) values
(1, '2018-01-10',null, 2, 0, '12', 5,'10000');

insert into `chitiethd` (`mahd`, `masp`, `soluong`, `trangweb`,`giaweb`,`trietkhau`,`khoiluong`,`tigia`,`macheck`,`makh`,`giuhop`,`madh`) values
(1, "ECT123", 2, 'adidas', '5000','100', '3','216',2,2,1,1),
(1, "TD-321", 4, 'adidas', '5000','100', '3','216',2,2,3,1); 