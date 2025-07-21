<div>
   @foreach($students as $student)
       <p>{{ $student['name'] }}</p>
   @endforeach

    <livewire:teste1 name="Eric" lazy />
</div>
