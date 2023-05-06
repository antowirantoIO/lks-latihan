<?php

namespace App\Http\Controllers;

use Throwable;
use App\Models\Poll;
use App\Models\Vote;
use App\Models\Choise;
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
            $votes = Vote::where('user_id', auth()->user()->id)->where('poll_id', $poll->id)->get();

            $vote = Vote::where('poll_id', $poll->id)->get();
            // return $vote[0]->choice->choise;
            for ($i=0; $i < $vote->count(); $i++) {
                    $result[] = [
                        'division' => $vote[$i]->division->name,
                        'choice' => []
                    ];

                    // add all choice
                    for ($j=0; $j < $vote->count(); $j++) {
                        if($vote[$j]->division->id == auth()->user()->division_id) {
                            $result[$i]['choice'][] = [
                                'id' => $vote[$j]->choice->id,
                                'name' => $vote[$j]->choice->choise,
                                'total' => $vote[$j]->choice->votes->count()
                            ];
                        }
                    }

                    $unique_names = array();
                    $result_filter = array();
                    $index_max = 0;
                    $total_max = 0;
                    foreach ($result[$i]['choice'] as $index => $item) {
                        if ($item['total'] > $total_max) {
                            $index_max = $index;
                            $total_max = $item['total'];
                        }
                        if (!in_array($item['name'], $unique_names)) {
                            $unique_names[] = $item['name'];
                            $result_filter[] = $item;
                        }
                    }

                    $new_data[] = array(
                        'division' => $result[$i]['division'],
                        'point' => $result_filter[$index_max]['name']
                    );

            }


            $data[] = [
                'id' => $poll->id,
                'title' => $poll->title,
                'description' => $poll->description,
                'deadline' => $poll->deadline,
                'creator' => $poll->creator->username,
                'choices' => $poll->choices,
                'created' => $poll->created_at->diffForHumans(),
                'voted' => $votes->count() > 0 ? true : false,
                'result' => $new_data ?? ''
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

    public function vote($poll, $choise){
        $poll = Poll::find($poll);
        $choise = Choise::find($choise);

        if($choise == null || $poll == null){
            return response()->json([
                'status' => false,
                'message' => 'Invalid poll or choise'
            ], 404);
        }

        $vote = Vote::where('user_id', auth()->user()->id)->where('poll_id', $poll->id)->first();
        if($vote){
            return response()->json([
                'status' => false,
                'message' => 'You have already voted'
            ], 422);
        }

        if($poll->daedline > now()){
            return response()->json([
                'status' => false,
                'message' => 'The poll has been closed'
            ], 422);
        }

        $vote = $choise->votes()->create([
                'user_id' => auth()->user()->id,
                'poll_id' => $poll->id,
                'division_id' => auth()->user()->division->id
            ]);

        return response()->json([
            'status' => true,
            'message' => 'Vote success',
            'data' => $vote
        ], 200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Poll $poll)
    {
        try {
            $poll->delete();
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => 'The given data was invalid',
                'errors' => $th
            ], 422);
        }

        return response()->json([
            'status' => true,
            'message' => 'Poll success deleted'
        ], 200);
    }
}
