<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id',
            'name' => 'string|unique:students,name,'.$this->student->id,
            'course' => 'string',
            'email' => 'string|email|unique:students,email,'.$this->student->id,
            'phone' => 'integer|digits_between:2,10|unique:students,phone,'.$this->student->id,
        ];
    }
}
