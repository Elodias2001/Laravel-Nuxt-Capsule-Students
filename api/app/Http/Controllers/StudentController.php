<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Repositories\CrudRepository;
use Illuminate\Http\Request;

class StudentController extends BaseController
{
    protected CrudRepository $service;

    public function __construct()
    {
        // $this->middleware('auth');
        $this->service = new CrudRepository(new Student());
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['students'] = $this->service->getAll(false);
        return $this->sendResponse($data,'Students send with successfully !😁');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request)
    {
        $response = $this->service->store($request->validated(),$request);
        return $this->sendResponse($response,'Student save with successfully !😁');
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        $response = $this->service->getById($student->id);
        return $this->sendResponse($response,'Student send with successfully !😁');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentRequest $request, Student $student)
    {
        $response = $this->service->update($request->validated(),$student,$request);
        return $this->sendResponse($response,'Student updated with successfully !😁');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $this->service->remove($student);
        return $this->sendResponse([],'Student remove with successfully !😁');
    }
}
