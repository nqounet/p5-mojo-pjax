#!/usr/bin/env perl
use utf8;
use Mojolicious::Lite;


under sub {
  my $self = shift;
  $self->layout( $self->req->headers->header('X-PJAX') ? 'pjax' : 'default' );
  1;
};

get '/' => 'index';
get '/pjax' => 'pjax';
get '/vegas' => 'vegas';

app->start;
