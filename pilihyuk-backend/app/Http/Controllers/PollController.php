<?php

namespace App\Http\Controllers;

use Throwable;
use App\Models\Poll;
use App\Http\Requests\StorePollRequest;
use App\Http\Requests\UpdatePollRequest;

class PollController extends Controller
{

    public function __construct() {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $polls = Poll::all();
        $polls->load('creator', 'choices');

        $data = [];
        foreach ($polls as $poll) {
            $data[] = [
                'id' => $poll->id,
                'title' => $poll->title,
                'description' => $poll->description,
                'deadline' => $poll->deadline,
                'creator' => $poll->creator->username,
                'choices' => $poll->choices,
                'created' => $poll->created_at->diffForHumans(),
                'result' => []
            ];
        }

        return response()->json([
            'status' => true,
            'data' => $data
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePollRequest $request)
    {
        try {
            $poll = Poll::create([
                'title' => $request->title,
                'description' => $request->description,
                'deadline' => $request->deadline,
                'created_by' => auth()->user()->id,
            ]);

            foreach ($request->choices as $choice) {
                $poll->choices()->create([
                    'choise' => $choice
                ]);
            }

            $poll->load('choices');
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => 'The given data was invalid',
                'errors' => $th
            ], 422);
        }

        return response()->json([
            'status' => true,
            'message' => 'Poll success created',
            'data' => $poll
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Poll $poll)
    {
        $poll->load('creator', 'choices');
        $data = [
            'id' => $poll->id,
            'title' => $poll->title,
            'description' => $poll->description,
            'deadline' => $poll->deadline,
            'creator' => $poll->creator->username,
            'choices' => $poll->choices,
            'created' => $poll->created_at->diffForHumans(),
            'result' => []
        ];

        return response()->json([
            'status' => true,
            'data' => $data
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Poll $poll)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePollRequest $request, Poll $poll)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Poll $poll)
    {
        //
    }
}
