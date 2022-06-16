create table firma
(
    id    int auto_increment,
    ico   varchar(10)            not null,
    dic   varchar(12)            not null,
    nazev varchar(100)           not null,
    ulice varchar(50)            null,
    mesto varchar(20)            null,
    psc   varchar(10)            null,
    stav  varchar(20)            null,
    datum date default curdate() null,
    primary key (id, ico)
);

