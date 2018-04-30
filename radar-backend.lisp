(ql:quickload :drakma)
(ql:quickload :cl-json)

(defpackage :radar-backend-api
  (:use :common-lisp :drakma :cl-json))

(in-package :radar-backend-api)

(defparameter *db* nil)

(defun make-user (&key firstname lastname email (avatar nil))
  `(:firstname ,firstname :lastname ,lastname :email ,email :avatar ,avatar))
