import { User, LoginCredentials, RegisterCredentials } from '../types/auth';
import { supabase } from './supabaseClient';

export const authService = {
  async login({ email, password }: LoginCredentials): Promise<User> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (!data.user) {
      throw new Error('No user data returned');
    }

    // Get user profile data
    const { data: profile, error: profileError } = await supabase
      .from('users')
      .select('*')
      .eq('id', data.user.id)
      .single();

    if (profileError) {
      throw new Error(profileError.message);
    }

    return {
      id: data.user.id,
      email: data.user.email!,
      name: profile.name,
      role: profile.role,
    };
  },

  async register({ email, password, name }: RegisterCredentials): Promise<User> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (!data.user) {
      throw new Error('No user data returned');
    }

    // Create user profile
    const { error: profileError } = await supabase
      .from('users')
      .insert([
        {
          id: data.user.id,
          email: data.user.email!,
          name,
          role: 'user',
        },
      ]);

    if (profileError) {
      throw new Error(profileError.message);
    }

    return {
      id: data.user.id,
      email: data.user.email!,
      name,
      role: 'user',
    };
  },

  async logout(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
  },

  async getCurrentUser(): Promise<User | null> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return null;
    }

    // Get user profile data
    const { data: profile, error: profileError } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (profileError) {
      return null;
    }

    return {
      id: user.id,
      email: user.email!,
      name: profile.name,
      role: profile.role,
    };
  },
};