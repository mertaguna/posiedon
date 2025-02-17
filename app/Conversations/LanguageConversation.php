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
    ];

    public function run()
    {
        $this->say("What language do you use?");
        $this->say("Bahasa yang kamu gunakan?");
        $question = Question::create("Please select your language:")->addButtons([
            Button::create('Indonesia')->value('id'),
            Button::create('English')->value('en'),
        ]);

        $this->ask($question, function ($answer) {
            if ($answer->isInteractiveMessageReply()) {
                $selectedLanguage = $answer->getValue();
                if ($selectedLanguage == 'id') {
                    $this->say('Selamat datang!');
                    $this->bot->startConversation(new ServiceIDConversation());
                } elseif ($selectedLanguage == 'en') {
                    $this->say('Welcome!');
                }
            } else {
                $this->say('Invalid selection. Please try again.<br><br>Pilihan tidak valid. Silakan coba lagi.');
                $this->run();
            }
        });
    }
}
