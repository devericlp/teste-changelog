<?php

namespace App\Livewire;

use App\Models\Student;
use Livewire\Component;

class Teste extends Component
{
    public array $students;

    public function mount():void
    {
        $this->students = Student::query()->get()->toArray();
    }


    public function render()
    {
        return view('livewire.teste');
    }
}
