<?php

namespace App\Livewire;

use Livewire\Component;

class Teste1 extends Component
{
    public string $name;
     public function mount(string $name):void
    {
        $this->name = $name;
    }

    public function render()
    {
        return view('livewire.teste1');
    }
}
