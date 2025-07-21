<?php

namespace App\Livewire;

use Livewire\Component;

class Teste1 extends Component
{
    public string $name;
    public string $email;
     public function mount(string $name, string $email):void
    {
        $this->name = $name;
        $this->email = $email;
    }

    public function render()
    {
        return view('livewire.teste1');
    }
}
