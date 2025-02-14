<?php

namespace App\Conversations;

use BotMan\BotMan\Messages\Conversations\Conversation;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;
use BotMan\BotMan\Messages\Outgoing\Question;

class LanguageConversation extends Conversation
{
    private $languageOptions = [
        'id' => 'Indonesia',
        'en' => 'English',
        // Tambahkan bahasa lainnya jika perlu
    ];

    public function run()
    {
        $question = Question::create('Bahasa yang digunakan?')->addButtons([
            Button::create('Indonesia')->value('id'),
            Button::create('English')->value('en'),
            // Tambahkan tombol bahasa lainnya jika perlu
        ]);

        $this->ask($question, function ($answer) {
            if ($answer->isInteractiveMessageReply()) {
                $selectedLanguage = $answer->getValue();
                // Simpan kode bahasa yang dipilih oleh pengguna
                // Anda dapat menggunakan metode `say()` untuk menampilkan pesan konfirmasi
                $this->say('Kamu memilih: ' . $this->languageOptions[$selectedLanguage]);

                // Setelah pengguna memilih bahasa
                if ($selectedLanguage == 'id') {
                    // Tampilkan teks dalam bahasa Indonesia
                    $this->say('Selamat datang!');
                } elseif ($selectedLanguage == 'en') {
                    // Tampilkan teks dalam bahasa Inggris
                    $this->say('Welcome!');
                }
            } else {
                $this->say('Pilihan tidak valid. Silakan coba lagi.');
                $this->run(); // Restart konversasi jika input tidak valid
            }
        });
    }
}
