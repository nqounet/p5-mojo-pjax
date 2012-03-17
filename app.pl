#!/usr/bin/env perl
use utf8;
use Mojolicious::Lite;


under sub {
  my $self = shift;
  my $pjax = $self->req->headers->header('X-PJAX') || "";
  $self->layout( $pjax eq 'true' ? 'pjax' : 'default' );
  1;
};

get '/' => 'index';
get '/pjax' => 'pjax';
get '/vegas' => 'vegas';

app->start;
