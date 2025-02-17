<?php

namespace App\Conversations;

use BotMan\BotMan\Messages\Conversations\Conversation;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;
use BotMan\BotMan\Messages\Outgoing\Question;

class ServiceIDConversation extends Conversation
{
    public function run()
    {
        $this->bot->typesAndWaits(2);
        $question = Question::create("Ada yang bisa kami bantu?")->addButtons([
            Button::create('Cek Jadwal Dokter')->value('cari-dokter'),
            Button::create('FAQs')->value('faq'),
            Button::create('Selesai')->value('selesai'),
        ]);

        $this->ask($question, function ($answer) {
            if ($answer->isInteractiveMessageReply()) {
                $value = $answer->getValue();
                if ($value == 'cari-dokter') {
                    $this->say('Kami bisa membantu anda dengan itu');
                    $this->bot->typesAndWaits(2);
                    $this->say('Kamu bisa klik <a href="http://127.0.0.1:8001/about" target="_blank">di sini</a> untuk informasi lebih lanjut mengenai jadwal dokter.');
                    $this->bot->startConversation(new ServiceIDConversation());
                } elseif ($value == 'faq') {
                    $this->say('Anda memilih menu FAQs');
                    $this->bot->typesAndWaits(2);
                    $this->bot->startConversation(new ServiceIDConversation());
                } elseif ($value == 'selesai') {
                    $this->bot->typesAndWaits(2);
                    $this->say('Terima kasih telah menggunakan layanan kami');
                }
            } else {
                $this->bot->typesAndWaits(2);
                $this->say('Invalid selection. Please try again.<br><br>Pilihan tidak valid. Silakan coba lagi.');
                $this->run();
            }
        });
    }
}
