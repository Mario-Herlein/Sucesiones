<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// Solo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Método no permitido.']);
    exit;
}

// Honeypot: los bots llenan este campo, los humanos no
if (!empty($_POST['website'])) {
    // Respuesta silenciosa para no alertar al bot
    echo json_encode(['ok' => true]);
    exit;
}

// Sanitizar
function clean(string $val): string {
    return trim(strip_tags($val));
}

function clean_header(string $val): string {
    return str_replace(["\r", "\n"], '', clean($val));
}

$nombre    = clean($_POST['nombre']    ?? '');
$telefono  = clean($_POST['telefono']  ?? '');
$email     = clean($_POST['email']     ?? '');
$situacion = clean($_POST['situacion'] ?? '');
$mensaje   = clean($_POST['mensaje']   ?? '');
$consentimiento = clean($_POST['consentimiento'] ?? '');

// Validar
if (empty($nombre)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'El nombre es requerido.']);
    exit;
}
if (empty($telefono)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'El teléfono es requerido.']);
    exit;
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'El email no es válido.']);
    exit;
}
if ($consentimiento !== '1') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Necesitamos tu consentimiento para responder la consulta.']);
    exit;
}

// Whitelist de valores válidos para situacion
$situacionLabels = [
    'inmueble'   => 'Heredé un inmueble y quiero venderlo',
    'iniciar'    => 'Necesito iniciar una sucesión',
    'conflicto'  => 'Hay conflicto entre herederos',
    'testamento' => 'Sucesión con testamento',
    'patrimonio' => 'Quiero ordenar mi patrimonio en vida',
    'otra'       => 'Otra consulta',
];
$situacionLabel = $situacionLabels[$situacion] ?? 'Otra consulta';

// Construir email
$destinatario = 'saucedoabogada@gmail.com';
$nombreHeader = clean_header($nombre);
$emailHeader  = clean_header($email);
$asunto       = '=?UTF-8?B?' . base64_encode('Nueva consulta - Sucesiones - ' . $nombreHeader) . '?=';

$cuerpo  = "Nueva consulta recibida desde saucedo-asociados.com.ar/sucesiones\n";
$cuerpo .= str_repeat('-', 50) . "\n\n";
$cuerpo .= "Nombre:    $nombre\n";
$cuerpo .= "Teléfono:  $telefono\n";
$cuerpo .= "Email:     $email\n";
$cuerpo .= "Consulta:  $situacionLabel\n";
$cuerpo .= "Consentimiento: aceptado\n";
if (!empty($mensaje)) {
    $cuerpo .= "\nMensaje:\n" . wordwrap($mensaje, 72, "\n") . "\n";
}
$cuerpo .= "\n" . str_repeat('-', 50) . "\n";
$cuerpo .= 'Recibido el ' . date('d/m/Y') . ' a las ' . date('H:i') . " hs (hora del servidor)\n";

$cabeceras  = "From: Saucedo & Asociados <info@saucedo-asociados.com.ar>\r\n";
$cabeceras .= "Reply-To: {$nombreHeader} <{$emailHeader}>\r\n";
$cabeceras .= "CC: marioherlein@gmail.com\r\n";
$cabeceras .= "MIME-Version: 1.0\r\n";
$cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";
$cabeceras .= "Content-Transfer-Encoding: 8bit\r\n";
$cabeceras .= 'X-Mailer: PHP/' . phpversion() . "\r\n";

$enviado = mail($destinatario, $asunto, $cuerpo, $cabeceras);

if ($enviado) {
    http_response_code(200);
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode([
        'ok'    => false,
        'error' => 'No pudimos enviar tu consulta. Por favor escribinos por WhatsApp.',
    ]);
}
