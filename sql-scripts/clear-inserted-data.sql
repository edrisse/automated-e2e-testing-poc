delete from person_address where person_address.person_id = (select max(person_id) from person);
delete from person_attribute where person_attribute.person_id = (select max(person_id) from person);
delete from patient_identifier where patient_identifier.patient_id = (select max(person_id) from person);
delete from person_name where person_name.person_id = (select max(person_id) from person);
delete from patient where patient.patient_id = (select max(person_id) from person);
delete p1 from person p1 join (select max(person_id) as person_id from person p2) person_max on (p1.person_id = person_max.person_id);
