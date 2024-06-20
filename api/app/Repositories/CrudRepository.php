<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class CrudRepository
{

    private Model $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function getAll($paginate = true ): mixed
    {
        return $paginate ?
            $this->model
                ->newQuery()
                ->with($this->model::relations())
                ->filter()
                // ->active()
                ->paginate(request('per_page','10')) :
            $this->model::query()
                ->with($this->model::relations())
                // ->active()
                ->orderByDesc('id')
                ->get();
    }

    function store(array $data,$request = null)
    {
        $model =  $this->model->newQuery()->create($data);
        return $model;
    }

    public function findOrFail($id)
    {
        return $this->model->newQuery()->findOrFail($id);
    }

    public function getById($id)
    {
        return $this->model->with($this->model::relations())->newQuery()->find($id);
    }

    function update(array $data, Model $model,  $request = null): Model
    {
        $model->update($data);

        return $model->refresh();
    }

    public function remove(Model $model)
    {
        $model->delete($this->model::secureDeleteRelations());
        return $model;
    }

}
