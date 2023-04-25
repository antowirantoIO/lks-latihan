<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only(['username', 'password']);

        if (!$token = Auth::attempt($credentials))
            return response()->json([
                'status' => false,
                'message' => 'Username atau password tidak ditemukan'
            ], 401);

        return $this->respondWithToken($token);
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function logout()
    {
        auth()->logout();
        return response()->json([
            'status' => true,
            'message' => 'successfully logged out'
        ]);
    }

    public function resetPassword(Request $request){
        $user = Auth::user();
        if (!Auth::attempt(['username' => $user->username, 'password' => $request->old_password])) {
            return response()->json([
                'status' => false,
                'message' => 'old password did not match'
            ], 422);
        }
        $user->password = bcrypt($request->new_password);
        $user->save();

        auth()->logout();

        return response()->json([
            'status' => true,
            'message' => 'reset success, user logged out'
        ]);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => Auth::user()
        ]);
    }
}
