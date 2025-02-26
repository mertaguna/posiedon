<?php

namespace App\Http\Controllers;

use App\Conversations\LanguageConversation;

class BotManController extends Controller
{
    public function handle()
    {
        $bot = app('botman');

        $bot->typesAndWaits(2);

        $bot->fallback('Sorry, i cannot understand, please try again');

        $bot->hears('hello|hi|halo|hallo|hai', function ($bot) {
            $bot->startConversation(new LanguageConversation());
        });

        $doctorsSchedule = [
            'Anak' => [
                'A' => '08:00 - 12:00',
                'B' => '10:00 - 14:00',
                'C' => '08:00 - 12:00',
            ],
            'Jiwa' => [
                'D' => '08:00 - 12:00',
                'E' => '10:00 - 14:00',
                'F' => '08:00 - 12:00',
            ],
        ];

        $lowercaseDoctorsSchedule = [];
        foreach ($doctorsSchedule as $poli => $doctors) {
            $lowercaseDoctorsSchedule[strtolower($poli)] = [];
            foreach ($doctors as $doctor => $schedule) {
                $lowercaseDoctorsSchedule[strtolower($poli)][strtolower($doctor)] = $schedule;
            }
        }

        $bot->hears('(.*)poli {poli}', function ($bot, $poli) use ($doctorsSchedule, $lowercaseDoctorsSchedule) {
            $poli = strtolower($poli); // Convert input to lowercase
            if (array_key_exists($poli, $lowercaseDoctorsSchedule)) {
                $doctors = $lowercaseDoctorsSchedule[$poli];
                $response = "Dokter yang tersedia di poli " . ucfirst($poli) . ":\n"; // Keep original case for output
                foreach ($doctors as $doctor => $schedule) {
                    $response .= ucfirst($doctor) . ": $schedule\n"; // Keep original case for output
                }
            } else {
                $response = "Poli tidak ditemukan.";
            }
            $bot->reply($response);
            $bot->typesAndWaits(1);
            $bot->reply('Kamu bisa klik <a href="http://127.0.0.1:8001/about" target="_blank">di sini</a> untuk informasi lebih lanjut.');
        });

        // Mendengarkan perintah untuk jadwal dokter
        $bot->hears('(.*)jadwal dokter {doctor}', function ($bot, $doctor) use ($doctorsSchedule, $lowercaseDoctorsSchedule) {
            $doctor = strtolower($doctor); // Convert input to lowercase
            // Mencari dokter di semua poli
            $found = false;
            foreach ($lowercaseDoctorsSchedule as $poli => $doctors) {
                if (array_key_exists($doctor, $doctors)) {
                    $schedule = $doctors[$doctor];
                    $response = "Jadwal untuk dokter " . ucfirst($doctor) . " di poli " . ucfirst($poli) . ": $schedule\n"; // Keep original case for output
                    $found = true;
                    break; // Keluar dari loop setelah menemukan dokter
                }
            }
            if (!$found) {
                $response = "Dokter tidak ditemukan.";
            }
            $bot->reply($response);
            $bot->typesAndWaits(1);
            $bot->reply('Kamu bisa klik <a href="http://127.0.0.1:8001/about" target="_blank">di sini</a> untuk informasi lebih lanjut.');
        });

        $bot->listen();
    }
}
