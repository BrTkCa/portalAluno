module.exports = function() { /* SELECT ARRAY_TO_STRING(ARRAY( 	

	SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome) 
	FROM acad.tbl_calendario_turma calendariotma 

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

    WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 2 and horainicio.horario = '07:00:00'


),'-')AS segunda07, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 2 and horainicio.horario = '09:00:00'


),'-')AS segunda09, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 3 and horainicio.horario = '07:00:00'


),'-')AS terca07, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 3 and horainicio.horario = '09:00:00'


),'-')AS terca09, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 4 and horainicio.horario = '07:00:00'


),'-')AS quarta07, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 4 and horainicio.horario = '09:00:00'


),'-')AS quarta09, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 5 and horainicio.horario = '07:00:00'


),'-')AS quinta07, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 5 and horainicio.horario = '09:00:00'


),'-')AS quinta09, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 6 and horainicio.horario = '07:00:00'


),'-')AS sexta07, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 6 and horainicio.horario = '09:00:00'


),'-')AS sexta09, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 7 and horainicio.horario = '07:00:00'


),'-')AS sabado07, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 7 and horainicio.horario = '09:00:00'


),'-')AS sabado09,ARRAY_TO_STRING(ARRAY(
SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 2 and horainicio.horario = '13:00:00'


),'-')AS segunda13, ARRAY_TO_STRING(ARRAY(
SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 2 and horainicio.horario = '15:00:00'


),'-')AS segunda15,ARRAY_TO_STRING(ARRAY(
SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 3 and horainicio.horario = '13:00:00'


),'-')AS terca13,ARRAY_TO_STRING(ARRAY(
SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 3 and horainicio.horario = '15:00:00'


),'-')AS terca15,ARRAY_TO_STRING(ARRAY(
SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 4 and horainicio.horario = '13:00:00'


),'-')AS quarta13, ARRAY_TO_STRING(ARRAY(
SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 4 and horainicio.horario = '15:00:00'


),'-')AS quarta15, ARRAY_TO_STRING(ARRAY(
SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 5 and horainicio.horario = '13:00:00'


),'-')AS quinta13, ARRAY_TO_STRING(ARRAY(
SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 5 and horainicio.horario = '15:00:00'


),'-')AS quinta15,ARRAY_TO_STRING(ARRAY(
SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 6 and horainicio.horario = '13:00:00'


),'-')AS sexta13, ARRAY_TO_STRING(ARRAY(
SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 6 and horainicio.horario = '15:00:00'


),'-')AS sexta15, ARRAY_TO_STRING(ARRAY(
SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 7 and horainicio.horario = '13:00:00'


),'-')AS sabado13, ARRAY_TO_STRING(ARRAY(
SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 7 and horainicio.horario = '15:00:00'


),'-')AS sabado15, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 2 and horainicio.horario = '19:00:00'


),'-')AS segunda19, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 2 and horainicio.horario = '21:00:00'


),'-')AS segunda21, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 3 and horainicio.horario = '19:00:00'


),'-')AS terca19, ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 3 and horainicio.horario = '21:00:00'


),'-')AS terca21,ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 4 and horainicio.horario = '19:00:00'


),'-')AS quarta19,ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 4 and horainicio.horario = '21:00:00'


),'-')AS quarta21,ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 5 and horainicio.horario = '19:00:00'


),'-')AS quinta19,ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 5 and horainicio.horario = '21:00:00'


),'-')AS quinta21,ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 6 and horainicio.horario = '19:00:00'


),'-')AS sexta19,ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 6 and horainicio.horario = '21:00:00'


),'-')AS sexta21,ARRAY_TO_STRING(ARRAY(

SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma
	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 7 and horainicio.horario = '19:00:00'


	),'-')AS sabado19, ARRAY_TO_STRING(ARRAY(

	SELECT disciplina.id ||' | '|| initcap(disciplina.nome) || ' | ' || 'Sala:' || sala.codigosala || ' | ' || initcap(pessoap.nome)
	FROM acad.tbl_calendario_turma calendariotma

	INNER JOIN acad.tbl_tma_disc tmadisc ON tmadisc.id = calendariotma.id_turma

	INNER JOIN acad.tbl_matric_tma matrictma ON matrictma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_disc disciplina ON disciplina.id = tmadisc.id_disciplina
	INNER JOIN acad.tbl_dia_semana diasemana ON diasemana.id = calendariotma.id_dia_semana
	INNER JOIN acad.tbl_hora_fim horafim ON horafim.id = calendariotma.id_hora_fim
	INNER JOIN acad.tbl_hora_inicio horainicio ON horainicio.id = horafim.id_inicio
	INNER JOIN acad.tbl_sala sala ON sala.id = calendariotma.id_sala
	INNER JOIN acad.tbl_docente_turma docentetma ON docentetma.id_turma = tmadisc.id
	INNER JOIN acad.tbl_docente docente ON docente.id = docentetma.id_docente
	INNER JOIN global.tbl_pessoa pessoap ON pessoap.id = docente.pessoa_id

        WHERE perletivo.id =  tmadisc.id_periodo_letivo  AND matric.id = matrictma.id_matric and diasemana.id = 7 and horainicio.horario = '21:00:00'

	),'-')AS sabado21,curso.id AS cursoid, initcap(curso.nome) AS cursonome,oftetapatma.etapa AS etapa, periododuracao.descricao AS periododescricao,
	INITCAP(instituicao.nome) AS iesnome, instituicao.codies AS iescod, instituicao.id AS iesid, initcap(perletivo.descricao) AS perletivo,
	initcap(pessoaaluno.nome) AS alunonome FROM acad.tbl_matric matric

	INNER JOIN acad.tbl_aluno_curso alunocurso ON alunocurso.id = matric.id_aluno_curso
        INNER JOIN acad.tbl_oft_etapa_tma oftetapatma ON oftetapatma.id = matric.id_etapa
        INNER JOIN acad.tab_perletivo perletivo ON perletivo.id = matric.id_periodo
	INNER JOIN acad.tbl_curso curso ON curso.id = alunocurso.id_curso
	INNER JOIN acad.tbl_aluno aluno ON aluno.id = alunocurso.id_aluno
	INNER JOIN acad.tbl_curso_ies cursoies ON cursoies.id_curso = curso.id
	INNER JOIN acad.tbl_inst_ensino instituicao ON instituicao.id = cursoies.id_ies
	INNER JOIN global.tbl_pessoa pessoaaluno ON pessoaaluno.id = aluno.pessoa_id
	INNER JOIN acad.tbl_periodo_duracao periododuracao ON periododuracao.id = curso.id_periodo

	*/}.toString().slice(14,-3).replace("/*", " ")