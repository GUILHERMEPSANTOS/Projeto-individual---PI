use Help;
desc usuario;

select *from usuario;
alter table usuario add column Preferencia varchar(50);

update usuario set Preferencia = "Doação de sangue" where id in (1,2,3,4);

select count(Preferencia) as 'Preferencia(doação de sangue)' from usuario where Preferencia = 'Doação de sangue';
select count(Preferencia) as 'Preferencia(Adoção de animais)' from usuario where Preferencia = 'Adoação de animais';
select count(Preferencia) as 'Preferencia(Visita de orfanatos)' from usuario where Preferencia = 'Visita de orfanatos';
select count(Preferencia) as 'Preferencia(Doação de cabelo)' from usuario where Preferencia = 'Doação de cabelo';
select count(Preferencia) as 'Preferencia(Mínimas atitudes)' from usuario where Preferencia = 'Mínimas atitudes';

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
); 

/*create table usuario(
	id int primary key auto_increment,
    nome varchar(50),
    email varchar(100),
    senha varchar(50),
    Refrencia varchar(50)
);*/


desc aviso;
desc usuario;
select * from aviso;
delete from aviso where id in (4,5,6);

truncate table aviso; 
truncate table usuario; 


alter table aviso drop foreign key aviso_ibfk_1;
alter table aviso add foreign key (fk_usuario) references usuario(id);
select * from usuario;