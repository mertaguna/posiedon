<?php

namespace App\Conversations;

use BotMan\BotMan\Messages\Conversations\Conversation;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;
use BotMan\BotMan\Messages\Outgoing\Question;

class ServiceENConversation extends Conversation
{
    public function run()
    {
        $this->bot->typesAndWaits(2);
        $question = Question::create("How can i help you today?")->addButtons([
            Button::create('Check Doctor`s Schedule')->value('cari-dokter'),
            Button::create('FAQs')->value('faq'),
            Button::create('End Conversation')->value('selesai'),
        ]);

        $this->ask($question, function ($answer) {
            if ($answer->isInteractiveMessageReply()) {
                $value = $answer->getValue();
                if ($value == 'cari-dokter') {
                    $this->say('We can help you with that');
                    $this->bot->typesAndWaits(2);
                    $this->say('You can click <a href="http://127.0.0.1:8000/about" target="_blank">here</a> for more information.');
                    $this->bot->typesAndWaits(2);
                    $this->bot->startConversation(new ServiceIDConversation());
                } elseif ($value == 'faq') {
                    $this->say('You choose menu: FAQs');
                    $this->bot->typesAndWaits(2);
                    $this->bot->startConversation(new ServiceIDConversation());
                } elseif ($value == 'selesai') {
                    $this->bot->typesAndWaits(2);
                    $this->say('Thank you for using our service');
                }
            } else {
                $this->bot->typesAndWaits(2);
                $this->say('Invalid selection. Please try again.<br><br>Pilihan tidak valid. Silakan coba lagi.');
                $this->run();
            }
        });
    }
}
